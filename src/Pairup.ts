import * as zipson from "zipson";

export interface PairupState {
  seed: number;
  person?: string;
  items: string[];
}

export type Rng = () => number;

export function findPair(
  state: PairupState,
  item: string
): [string, string] | undefined {
  const rng = createRng(state.seed);
  const { pairs, remainder } = createPairs(rng, state.items);
  return pairs.find((pair) => pair.includes(item));
}

export function createRng(seed: number) {
  return () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
}

export function createPairs(rng: Rng, items: string[]) {
  const copy = items.slice();
  const pairs = new Array<[string, string]>();
  while (copy.length >= 2) {
    const [first] = copy.splice(randIntInRange(rng, 0, copy.length - 1), 1);
    const [second] = copy.splice(randIntInRange(rng, 0, copy.length - 1), 1);
    pairs.push([first, second]);
  }
  return {
    pairs,
    remainder: copy,
  };
}

function randIntInRange(rng: Rng, min: number, max: number): number {
  return Math.round(rng() * (max - min) + min);
}

export function serialize(state: PairupState): string {
  return window.btoa(zipson.stringify(state));
}

export function deserialize(state: string): PairupState {
  return zipson.parse(window.atob(state));
}
