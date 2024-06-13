import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css"
import "./styles/clash-display.css"
import "./styles/inter.css"
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = ReactDOM.createRoot(document.getElementById("root")!);
const client = new QueryClient();
const theme = extendTheme({
  colors: {
    green  : {
      primary : "#54ea54"
    }
  }
})

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Router>
        <ChakraProvider disableGlobalStyle={true} theme={theme}>
          <App />
        </ChakraProvider>
      </Router>
      {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
