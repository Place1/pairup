import exp from "constants";
import {
  createPairs,
  createRng,
  PairupState,
  serialize,
  deserialize,
} from "./Pairup";

describe("pairup", () => {
  it("should work", () => {
    const rng = createRng(1);
    const result = createPairs(rng, [
      "John Smith",
      "Alice Brown",
      "Greg McGee",
      "Charlett Finnian",
    ]);
    expect(result.remainder).toHaveLength(0);
    expect(result.pairs).toHaveLength(2);
    expect(result.pairs).toEqual([
      ["Greg McGee", "Charlett Finnian"],
      ["John Smith", "Alice Brown"],
    ]);
  });
});

describe("io", () => {
  it("should serialize and deserialize", () => {
    const state: PairupState = {
      seed: 18,
      person: "world",
      items: ["hello", "world"],
    };
    const serialized = serialize(state);
    const deserialized = deserialize(serialized);
    expect(deserialized).toEqual(state);
  });
});
