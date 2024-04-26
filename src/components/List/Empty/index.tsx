import { Container } from "./styles";
import clipboard from "../../../../public/clipboard.png"


export function Empty() {
  return (
    <Container>
      <img src={clipboard} alt="iconde de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </Container>
  )
}