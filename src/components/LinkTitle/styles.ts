import styled from "styled-components"

export const LinkTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
  padding-left: 10px;
  width: 250px;
  transition: all 0.3s ease-in-out;

  h5 {
    color: ${({ theme }) => {
      theme.colors.green
    }};
  }

  img {
    height: 24px;
    color: #fff;
  }

  input {
    margin-top: 0;
  }
`
