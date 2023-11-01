/** Vendors */
import React from "react";
import ReactDOM from "react-dom/client";

/** CSS */
import "./dist/css/app.css";
import "./dist/css/colors.css";
import "./dist/css/format.css";

/** Components */
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
