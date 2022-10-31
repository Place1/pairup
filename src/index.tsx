import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pairings } from "./pages/Pairings";
import { Theme, theme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Style = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => (props.theme as Theme).brandColor};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <Style />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:state" element={<Pairings />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
