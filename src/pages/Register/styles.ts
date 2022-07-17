import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 120px;
  width: 650px;
  background-color: ${({ theme }) => theme.colors.white2};
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px -4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 3px 3px rgba(255, 255, 255, 0.25);
  border-radius: 24px;

  @media (max-width: 800px) {
    padding: 50px 70px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const CheckTerminos = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  text-align: left;

  input {
    width: 30px;
    height: 30px;
    border: 2px solid ${({ theme }) => theme.colors.black};
  }
`
