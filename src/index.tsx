import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pairings } from "./pages/Pairings";

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
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

root.render(
  <React.StrictMode>
    <Style />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:state" element={<Pairings />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
