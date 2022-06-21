// ? Librerias
import styled, { css } from 'styled-components'
import { ButtonProps } from './index'

export const Button = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px 20px;
`;

export const ContainerButton = styled.button<ButtonProps>`
  ${({
    primary: isPrimary,
    secondary: isSecondary,

  }) => {
    const defaultStyle = `
      display: inline-block;
			padding: 0 20px;
      min-width: 150px;
			height: 60px;
      color: ${({theme}) =>theme.colors.white1};
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
			font-size: 18px;
      line-height: 1.5;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      text-decoration: none;
      outline: none;
			border-radius: 8px;
      transition: all 0.2s linear;
      cursor: pointer;
    `

    const styles = `
    ${defaultStyle}
    ${isPrimary && primary}
    ${isSecondary && secondary}
    `

    return styles
  }}`

	
const primary = css`
  color: ${({theme}) => theme.colors.black};
  box-shadow: 0 2px 6px 0 rgb(102 88 221 / 50%);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
		inset 0px -1px 4px rgba(0, 0, 0, 0.25),
		inset 0px 4px 4px rgba(255, 255, 255, 0.25);
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
			inset 0px -2px 4px rgba(0, 0, 0, 0.25),
			inset 0px 5px 5px rgba(255, 255, 255, 0.25);
	}

	&:active {
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25),
			inset 0px -0px 2px rgba(0, 0, 0, 0.25),
			inset 0px 2px 2px rgba(255, 255, 255, 0.25);
	}

`
const secondary = css`
  background-color: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white2};
  box-shadow: 0 2px 6px 0 rgb(102 88 221 / 50%);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
		inset 0px -1px 4px rgba(0, 0, 0, 0.25),
		inset 0px 4px 4px rgba(255, 255, 255, 0.25);
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
			inset 0px -2px 4px rgba(0, 0, 0, 0.25),
			inset 0px 5px 5px rgba(255, 255, 255, 0.25);
	}

	&:active {
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25),
			inset 0px -0px 2px rgba(0, 0, 0, 0.25),
			inset 0px 2px 2px rgba(255, 255, 255, 0.25);
	}
`