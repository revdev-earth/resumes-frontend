import styled from "styled-components"

export const ContainerInputGroup = styled.div`
  position: relative;

  input {
    margin-bottom: 40px;
    padding: 10px;
    width: 100%;
    height: 50px;
    background-color: transparent;
    outline: 1px solid #333;
    border-radius: 8px;
  }

  &:focus-within label,
  &:active label {
  }

  &:focus-within input {
    //outline-color:;
  }
`
