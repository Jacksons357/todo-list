import styled from "styled-components";

export const Content = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5rem 0.625rem;
  background-color: ${props => props.theme['gray-700']};
`

export const LogoImage = styled.img `
  width: auto;
  height: auto;
`
