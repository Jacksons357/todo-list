import { InputContainer } from "./styles";

export function Input({ 
  ...rest 
  } : React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, 
    HTMLInputElement
  >) {
  return (
    <InputContainer 
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  )
}