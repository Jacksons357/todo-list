import styled from "styled-components";


export const Container = styled.div`
  p {
    display: flex;
    flex-direction: column;
  }

  padding: 4rem 1rem;
  border-top: 1px solid ${props => props.theme['gray-400']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  color: ${props => props.theme['gray-300']}
`