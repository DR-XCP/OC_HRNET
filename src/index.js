import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "react-modal-fromdr/dist/contexts/ModalContext";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./App";
import "./index.css";
import { persistor, store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <BrowserRouter>
            <ModalProvider>
               <App />
            </ModalProvider>
         </BrowserRouter>
      </PersistGate>
   </Provider>
);
