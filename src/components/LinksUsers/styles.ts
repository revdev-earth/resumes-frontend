import styled from 'styled-components'

export const LinkUserContainer = styled.li`
  position: relative;

  > img {
    position: absolute;
    display: flex;
    left: calc(50% - 75px);
    padding: 10px;
    width: 140px;
    height: 140px;
    background-color: ${({theme}) => theme.colors.gray};
    border-radius: 100%;
  }

  > div:last-child {
    position: absolute;
    bottom: ${({all}) =>  all? "" : "-25px" };
    top: ${({all}) =>  all? "195px" : "" };

    left: calc(50% - 25px);
    display: flex;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 100%;
    cursor: pointer;
  }

`

export const Content = styled.div`
  
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 85px;
  padding: 80px 20px 50px 20px;
  width: 300px;
  height: ${({all}) =>  all? "80px" : "300px" };
  background-color: ${({theme}) => theme.colors.white2};
  border-radius: 8px;
  transition: all .3s ease-in-out;

  ul {
    overflow: hidden;
    width: ${({all}) =>  all? "0" : "auto" };
    
    li {
      a {
        transition: all .3s ease-in-out;

        &:focus {
          transform: scale(1.1);
        }

        img {
          height: ${({all}) =>  all? "0" : "24px" };

        }
      }
    }

  }
  
  button {
    overflow: hidden;
    width: ${({all}) =>  all? "0" : "" };
    height: ${({all}) =>  all? "0" : "" };

  }
` 