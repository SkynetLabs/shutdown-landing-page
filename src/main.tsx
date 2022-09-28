import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "@fontsource/sora/400.css"; // normal
import "@fontsource/sora/600.css"; // semibold
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
