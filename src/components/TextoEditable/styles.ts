import styled from "styled-components"

export const Content = styled.div`
  position: relative;

  p {
    position: relative;
    padding: 10px;

    &:hover {
      img {
        display: block;
      }
    }

    img {
      position: absolute;
      display: none;
      top: 0;
      right: -20px;
      width: 24px;
      cursor: pointer;

      &:hover {
        display: block;
      }
    }
  }
`

export const EditarTxt = styled.div`
  position: relative;

  textarea {
    resize: horizontal;
    padding: 10px;
    width: 100%;
    height: ${({ heightTxt }) => heightTxt}px;
    background-color: transparent;
    font-size: 16px;
    vertical-align: baseline;
    border: 1px solid ${({ theme }) => theme.colors.green};
  }

  img {
    position: absolute;
    top: 0;
    right: -30px;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.success};
    width: 24px;
    border-radius: 5px;
    cursor: pointer;
  }
`
