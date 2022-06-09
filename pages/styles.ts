import styled from 'styled-components'

export const FirstSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 150px 50px;
  height: 500px;
  overflow: hidden;

  div {
    position: absolute;
    bottom: -100px;
    height: 300px;
    width: 400px;
    background-color: ${({theme}) => theme.colors.blue};
  }
`
export const SecondSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px 50px;
  background-color: ${({theme}) => theme.colors.gray};
  
  ul{
    width: 1400px;
    display:flex;
    justify-content: space-evenly;
  }
  `

export const ThirdSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px 50px;
  background-color: ${({theme}) => theme.colors.blue};

  ul {
    display: flex;
    gap: 20px;
  }
`