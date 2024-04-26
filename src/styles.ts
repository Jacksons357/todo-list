import styled from "styled-components";

export const SectionContainer = styled.section`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`

export const TaskInfoContainer = styled.div`
  display: flex;
  /* flex: 1; */
  justify-content: space-between;
  gap: 0.5rem;

  input, button {
    transform: translateY(-50%);
    margin-bottom: 1rem;
  }
`

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
