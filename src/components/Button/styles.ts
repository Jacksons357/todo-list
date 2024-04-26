import styled from "styled-components";

export const ButtonContent = styled.button`
  background-color: ${props => props.theme['blue-dark']};
  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  height: 3rem;

  color: ${props => props.theme['gray-100']};
  gap: 0.5rem;

  cursor: pointer;
  line-height: 140%;
  font-weight: bold;
  font-size: 0.875rem;

  transition: 0.2s;

  :hover {
    background-color: ${props => props.theme['blue']};
  }

  :focus {
    border-color: ${props => props.theme['blue']};
  }
`