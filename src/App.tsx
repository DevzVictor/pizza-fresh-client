import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import theme from "assets/styles/theme";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import Router from "./router";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
