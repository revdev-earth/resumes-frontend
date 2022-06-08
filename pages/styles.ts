import styled from 'styled-components'

export const FirstSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 100px 50px;
  height: 400px;
  overflow: hidden;

  div {
    position: absolute;
    bottom: -150px;
    height: 300px;
    width: 400px;
    background-color: ${({theme}) => theme.colors.blue};
  }
`