import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Buffer } from "buffer";

import { DHConnectProvider } from "@daohaus/connect";
import { HausThemeProvider } from "@daohaus/ui";

import { Routes } from "./Routes";

import "./App.css";
import { invokeTheme } from "./theme/theme";

// This solves an issue when using WalletConnect and intercept Txs to create dao proposals
// Related open issue: https://github.com/WalletConnect/walletconnect-monorepo/issues/748
window.Buffer = window.Buffer || Buffer;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <DHConnectProvider daoChainId={import.meta.env.VITE_TARGET_CHAIN}>
          <HausThemeProvider themeOverrides={invokeTheme}>
            <Routes />
          </HausThemeProvider>
        </DHConnectProvider>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);
