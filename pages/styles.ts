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
    
    li{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      width: 250px;
      height: 400px;
      background-color: ${({theme}) => theme.colors.white2};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
		    inset 0px -1px 4px rgba(0, 0, 0, 0.25),
		    inset 0px 4px 4px rgba(255, 255, 255, 0.25);
        border-radius: 8px;
        transition: .3s all ease-in-out;
        
        &:hover {
        transform: scale(1.1);
      }
      
    }
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