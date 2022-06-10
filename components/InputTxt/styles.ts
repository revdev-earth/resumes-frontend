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
  text: isText,
  textarea: isTextArea}) => (
    `${defaultStyle} 
    ${isTitle && title}
    ${isTextArea && textarea}
    ${isText && text}`
    )
  }
  
`

const title = css`
  
`

const textarea = css``

const text = css``