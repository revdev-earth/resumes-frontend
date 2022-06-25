import styled from "styled-components"

export const ItemEducationContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 425px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};

  > div {
    padding-right: 10px;
    display: flex;
    justify-content: space-between;

    input {
      background-color: transparent;
      input:first-child {
        width: auto;
      }
    }
  }

  textarea {
    width: 100%;
    padding-left: 10px;
    background-color: transparent;
    font-size: 18px;
  }
`
