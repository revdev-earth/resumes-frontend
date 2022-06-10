import styled, {css} from 'styled-components'
import {InputProps } from './index'

const defaultStyle = css`
margin-top: 15px;
padding: 10px;
width: 425px;
background-color: transparent;
font-size: 18px; 
` 

export const InputTxtContainer = styled.input<InputProps >`
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