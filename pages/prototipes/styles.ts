import styled from "styled-components"

export const Content = styled.div`
  > div {
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
  }
`
