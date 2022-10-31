import { Link } from "react-router-dom";
import { serialize } from "../Pairup";

export function Home() {
  const state = serialize({
    seed: Date.now(),
    person: "Omar Hobbs",
    items: [
      "Zander Stark",
      "Annika Dickson",
      "Omar Hobbs",
      "Kyleigh Mcbride",
      "Mia Ochoa",
      "Quincy Castaneda",
      "Zayden Mendoza",
      "Irvin Hurst",
      "Cristina Weaver",
      "Adriana Ware",
      "Athena Buck",
      "Magdalena Potter",
      "Marlie Huffman",
      "Gavyn Dunn",
      "Camila Randolph",
      "Lorenzo Brown",
      "Deandre Bean",
      "Jaylon Kent",
      "Camden Rubio",
      "Elsie Coleman",
    ],
  });

  return (
    <div>
      <Link to={state}>{state}</Link>
    </div>
  );
}
