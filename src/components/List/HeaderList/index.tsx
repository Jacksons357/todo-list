import { Container } from "./styles";

interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function HeaderList({ tasksCounter, checkedTasksCounter}: Props) {
  return (
    <Container>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Concluidas</p>
          <span>
            { tasksCounter === 0 
              ? tasksCounter 
              : `${checkedTasksCounter} de ${tasksCounter}`
            }
          </span>
      </aside>
    </Container>
  )
}
