import { Content, LogoImage } from "./styles";
import logo from "../../../public/logo.svg"


export function Header() {
  return (
    <Content>
      <LogoImage src={logo} alt="" />
    </Content>
  )
}
