import styled, {css} from 'styled-components'
import {InputProps } from './index'

const defaultStyle = css`
width: auto;

p, input {
  font-size: 18px; 
  padding: 10px;
  width: fit-content;

  img {
    background-color: ${({theme}) => console.log("Color theme :: ",theme)};
    cursor: pointer;
  }
}

p {
  position: relative;
  top: 0;
  padding-right: 20px;
  
  
  img {
    position: absolute;
    top: 6px;
    right: -15px;
    display: none;
  }

  &:hover {
    img{
      display: flex;
    }
  }
}

img {
  width: 24px;
}

>div {
  position: relative;
  display: flex;
  justify-content: start;
  width: fit-content;

  input {
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.colors.green};
  }
  img {
    position: absolute;
    top: 0;
    right: -30px;
    padding: 5px;
    background-color: ${({theme}) => theme.colors.success};
    width: 24px;
    border-radius: 5px;
    cursor: pointer;
    }
}
` 

export const InputTxtContainer = styled.div<InputProps >`
${({title: isTitle,
  date: isDate,
  text: isText}) => (
    `${defaultStyle} 
    ${isTitle && title}
    ${isText && text}
    ${isDate && date}`
    )
  }
  
`

const title = css`
  font-weight: 600;
`

const text = css`
margin-top: 5px;

`

const date = css`
margin-top: 0px;
font-size: 16px;
padding: 5px 20px;
`