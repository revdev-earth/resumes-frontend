import { ThemeProvider } from "styled-components";
import { theme } from "../config/theme";
import { GlobalStyle } from "../config/GlobalStyles";

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
