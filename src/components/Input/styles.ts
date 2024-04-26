import styled from "styled-components";

export const InputContainer = styled.input`
  border: 1px solid ${props => props.theme['gray-700']};
  border-radius: 8px;
  background-color: ${props => props.theme['gray-500']};
  color: ${props => props.theme['gray-100']};
  height: 3rem;
  padding: 1rem;
  width: 100%;
  line-height: 140%;

  ::placeholder {
    color: ${props => props.theme['gray-300']};
  }
`