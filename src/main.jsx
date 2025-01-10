import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "../node_modules/@fortawesome/fontawesome-free/css/all.min.Css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
