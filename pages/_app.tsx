import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.colors.primary} ;
  }

  h1 {font-size: 64px;}
  h2 {font-size: 56px;}
  h3 {font-size: 48px;}
  h4 {font-size: 28px;}
  h5 {font-size: 20px;}
  h6 {font-size: 12px;}
  p, a {font-size: 12px;}
`;

const theme = {
	colors: {
		primary: "#333333",
		gary: "#DDDDDD",
		green: "#6BDFDC",
		blue: "#0077B6",
		success: "#42C576",
		danger: "#FF637D",
		warning: "#FFF87F",
		white1: "#F1F1F1",
		white2: "#F3F3F3",
	},
};

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
