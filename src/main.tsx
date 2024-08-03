/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer.ts";
const store = configureStore({
  reducer: rootReducer
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <MantineProvider classNamesPrefix="plc-pls">
          <Notifications position="top-right" />
          <App />
        </MantineProvider>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
);
