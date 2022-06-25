import styled, { css } from "styled-components"
import { InputProps } from "./index"

const defaultStyle = css`
  width: auto;

  p,
  input {
    font-size: 18px;
    padding: 10px;
    width: fit-content;

    svg {
      cursor: pointer;
    }
  }

  p {
    position: relative;
    top: 0;
    padding-right: 20px;

    svg {
      position: absolute;
      top: 6px;
      right: -15px;
      display: none;
    }

    &:hover {
      svg {
        display: flex;
      }
    }
  }

  svg {
    width: 24px;
  }

  > div {
    position: relative;
    display: flex;
    justify-content: start;
    width: fit-content;

    input {
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.green};
    }

    svg {
      position: absolute;
      top: 0;
      right: -30px;
      padding: 5px;
      background-color: ${({ theme }) => theme.colors.success};
      width: 24px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`

export const Editable = styled.div<InputProps>`
  ${defaultStyle}
  ${({ titleBold: isTitleBold }) => isTitleBold && titleBold}
  ${({ text: isText }) => isText && text}
  ${({ date: isDate }) => isDate && date}
  ${({ number: isNumber }) => isNumber && number}
`

const titleBold = css`
  font-weight: 600;
`

const text = css`
  margin-top: 5px;
`

const number = css`
  > div {
    width: 30px;
  }
`

const date = css`
  margin-top: 0px;
  font-size: 16px;
  padding: 5px 20px;
`
