import styled, { keyframes, ThemeProvider } from 'styled-components/macro';
import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import logo from './logo.svg';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;

  header {
    background: ${(props) => props.theme.backgroundColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  header img {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    header img {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.primaryColor};
`;

const crazy = {
  backgroundColor: 'palevioletred',
  primaryColor: 'mediumseagreen',
};

const sad = {
  backgroundColor: 'grey',
  primaryColor: 'black',
};

function App() {
  const [theme, setTheme] = useState(crazy);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <button
          type="button"
          onClick={() => setTheme(theme === crazy ? sad : crazy)}
        >
          Change mood
        </button>
        <header>
          <img src={logo} alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
