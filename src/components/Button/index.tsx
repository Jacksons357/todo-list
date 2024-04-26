import { ButtonContent } from "./styles";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...rest }: Props) {
  return (
    <ButtonContent {...rest}>
      {children}
    </ButtonContent>
  )
}