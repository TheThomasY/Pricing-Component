import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    // Primary
    sliderBar: 'hsl(174, 77%, 80%)',
    sliderBg: 'hsl(174, 86%, 45%)',
    discountBg: 'hsl(14, 92%, 95%)',
    discountText: 'hsl(15, 100%, 70%)',
    ctaText: 'hsl(226, 100%, 87%)',

    // Neutral
    cardBg: 'hsl (0, 0%, 100%)',
    mainBg: 'hsl(230, 100%, 99%)',
    sliderEmpty: 'hsl(224, 65%, 95%)',
    toggleBg: 'hsl(223, 50%, 87%)',
    text: 'hsl(225, 20%, 60%)',
    ctaBg: 'hsl(227, 35%, 25%)',
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
