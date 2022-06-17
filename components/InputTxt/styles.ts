import styled, {css} from 'styled-components'
import {InputProps } from './index'

const defaultStyle = css`
width: auto;

p, input {
  font-size: 18px; 
  padding: 10px;


  img {
    background-color: red;
  }
}


img {
  width: 24px;
}

>div {
  position: relative;
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
    background-color: red;
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
width: 170px;
`