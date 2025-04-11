import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";

//PascalCase

export function App() {
  console.log("Oi");

  return (
    <>
      <Heading />
      <h1>Ola mundo (do App)</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ullam
        sunt aspernatur dicta laborum reiciendis quia tenetur aut,
        necessitatibus deleniti, placeat eveniet ipsam dolore culpa ut
        accusamus. Ipsum, eius incidunt.
      </p>
    </>
  );
}
