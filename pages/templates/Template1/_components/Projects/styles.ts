import styled from "styled-components"

export const ItemProject = styled.li`
  textarea {
    padding: 0 15px;
    width: 275px;
    height: 60px;
    background-color: transparent;
  }

  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
`
