import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          fuga excepturi aspernatur exercitationem eligendi nesciunt laboriosam
          nobis! Maiores enim libero dolor praesentium quaerat, dignissimos
          sapiente exercitationem blanditiis excepturi odio cupiditate.
        </p>
      </Container>
    </MainTemplate>
  );
}
