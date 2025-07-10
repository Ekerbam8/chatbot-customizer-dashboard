import React from "react";
import ReactDOM from "react-dom/client";
import CustomizerDashboard from "./CustomizerDashboard";
import "./index.css"; // Make sure this includes Tailwind styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomizerDashboard />
  </React.StrictMode>
);
