import { Check, Trash } from "@phosphor-icons/react";
import { Checkbox, Container, Paragraph } from "./styles";
import { ITask } from "../../../App";

interface ItemProps {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Item( { data, removeTask, toggleTaskStatus }: ItemProps ){
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked})
  }

  function handleRemove() {
    removeTask(data.id)
  }

  return (
    <Container>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked}/> 
          <Checkbox isChecked={data.isChecked}>
            {data.isChecked && <Check size={12} />}
          </Checkbox>

          <Paragraph isChecked={data.isChecked}>
            {data.text}
          </Paragraph>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </Container>
  )
}