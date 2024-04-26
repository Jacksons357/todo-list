import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "./components/Button";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input";
import { SectionContainer, TaskInfoContainer, TasksList } from "./styles";
import { HeaderList } from "./components/List/HeaderList";
import { Item } from "./components/List/Item";
import { useState } from "react";
import { Empty } from "./components/List/Empty";

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('DEseja mesmo apagar essa tarefa?')){
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean}) {
    const updateTasks = tasks.map((task) => {
      if (task.id === id){
        return { ...task, isChecked: value}
      }

      return { ...task }
    })

    setTasks(updateTasks)
  }

  return (
    <main>
      <Header />

        <SectionContainer>
          <TaskInfoContainer>
            <Input 
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />

            <Button onClick={handleAddTask}>
              Criar
              <PlusCircle size={16}/>
            </Button>
          </TaskInfoContainer>

          <TasksList>
            <HeaderList 
              tasksCounter={tasks.length}
              checkedTasksCounter={checkedTasksCounter}
            />

            {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
            ) : (
              <Empty />
            )}
          </TasksList>

        </SectionContainer>
    </main>
  )
}
