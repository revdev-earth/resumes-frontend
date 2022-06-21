import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
	padding: 0;
	box-sizing: border-box;
	list-style: none;
	text-decoration: none;
	border: none;
	outline: none;
	font-family: 'Roboto';
	vertical-align: baseline;
}
  article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: ${({theme}) => theme.colors.white1};
	font-size: 18px;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

	h1, h2, h3, h4, h5, h6{
		
		font-style: normal;
		font-weight: 700;
	}   
  h1 {font-size: 64px;}
  h2 {font-size: 56px;}
  h3 {font-size: 48px;}
  h4 {font-size: 28px;}
  h5 {font-size: 20px;}
  h6 {font-size: 12px;}
  p, a {font-size: 16px;}

	a { 
		cursor: pointer;

		&:visited{
			color: ${({ theme }) => theme.colors.black};
		}
	}

	textarea{
		resize: horizontal;
    overflow: hidden;
	}
`;
