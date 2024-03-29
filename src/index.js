import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
