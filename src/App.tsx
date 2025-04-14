import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";
import { Container } from "./components/Container";

//PascalCase

export function App() {
  return (
    <>
      <Container>
        <Heading>TESTANDO COMPONENTE HEADING</Heading>
      </Container>
    </>
  );
}
