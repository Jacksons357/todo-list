import styled from "styled-components";

interface CheckboxProps {
  isChecked: boolean
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 0.75rem;

  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;

  margin-bottom: 0.5rem;

  background-color: ${props => props.theme['gray-500']};
  border: 1px solid ${props => props.theme['gray-400']};

  div {
    display: flex;
  }

  label {
    display: flex;
    padding: 3px;
    align-items: center;
    gap: 0.75rem;
  }

  label input[type='checkbox'] {
    display: none;
  }

  button {
    border: none;
    background-color: transparent;
    border-radius: 4px;
    
    padding: 5px 4px 2px 4px;

    transition: 0.2s background-color;
    cursor: pointer;
  }
`

export const Checkbox = styled.span<CheckboxProps>`
  border-radius: 100%;
  height: 1.125rem;
  width: 1.125rem;

  transition: 0.2s all;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border: 2px solid ${props => props.isChecked ? props.theme['purple-dark'] : props.theme['blue']};
  background-color: ${props => props.isChecked ? props.theme['purple-dark'] : props.theme['gray-500']};
`

export const Paragraph = styled.p<CheckboxProps>`
  font-size: 0.875rem;
  line-height: 140%;
  user-select: none;

  transition: 0.2s all;

  text-decoration: ${props => props.isChecked ? 'line-through' : ''};
  color: ${props => props.isChecked ? props.theme['gray-300'] : ''};
`