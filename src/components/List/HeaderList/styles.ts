import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: space-between;
  
  aside {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-weight: bold;
  }

  aside:first-child {
    color: ${props => props.theme['blue']};
  }

  aside:last-child {
    color: ${props => props.theme['purple']}
  }
`