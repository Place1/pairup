import { useParams } from "react-router-dom";
import { deserialize, findPair } from "../Pairup";

export function Pairings() {
  const params = useParams();
  const encodedState = params["state"] as string;
  const state = deserialize(encodedState);
  const pair = findPair(state, state.person);

  if (!pair) {
    return <div>no pair</div>;
  }

  return (
    <div>
      "{pair[0]}" matched with "{pair[1]}"
    </div>
  );
}
