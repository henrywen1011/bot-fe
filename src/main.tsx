import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import WalletAdapter from "@contexts/WalletContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WalletAdapter>
        <App />
      </WalletAdapter>
    </BrowserRouter>
  </StrictMode>
);
