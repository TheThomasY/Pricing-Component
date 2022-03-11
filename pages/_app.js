import '../styles/globals.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    // Primary
    sliderBar: 'hsl(174, 77%, 80%)',
    sliderBg: 'hsl(174, 86%, 45%)',
    discountBg: 'hsl(14, 92%, 95%)',
    discountText: 'hsl(15, 100%, 70%)',
    ctaText: 'hsl(226, 100%, 87%)',

    // Neutral
    cardBg: '#ffffff',
    mainBg: 'hsl(230, 100%, 99%)',
    sliderEmpty: 'hsl(224, 65%, 95%)',
    toggleBg: 'hsl(223, 50%, 87%)',
    text: 'hsl(225, 20%, 60%)',
    ctaBg: 'hsl(227, 35%, 25%)',
  },

  screens: {
    sm: '640px',
    // => @media (min-width: 640px) { ... }
    md: '768px',
    // => @media (min-width: 768px) { ... }
    lg: '1024px',
    // => @media (min-width: 1024px) { ... }
    xl: '1280px',
    // => @media (min-width: 1280px) { ... }
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

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    color: hsl(225, 20%, 60%);
    background-color:  hsl(230, 100%, 99%);
}

html {
  font-size: 62.5%;
  background-color: #ffffff;
}

body {
  font-size: 1.5rem;
  background-color: transparent;
}

body::after {
  content: "";
  height: 40rem;
  width: 100%;
  position: absolute;
  top: 0;
  border-bottom-left-radius: 200px;
  background-color: #f1f5fe;
  z-index: -1;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
}

* {
  padding: 0;
  margin: 0;
}

*, *::before, *::after  {
  box-sizing: border-box;
}
`;
