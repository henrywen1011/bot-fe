import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import WalletAdapter from "@contexts/WalletContext.tsx";
import App from "./App.tsx";
import "@styles/index.scss";
import ModalsContainer from "@components/reusables/Modals/ModalsContainer.tsx";
import GlobalProvider from "@contexts/GlobalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <WalletAdapter>
          <App />
        </WalletAdapter>
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>
);
