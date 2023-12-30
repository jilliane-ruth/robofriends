import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./Containers/App";
import { createRoot } from "react-dom/client";
import "tachyons";

const root = document.getElementById("root");
createRoot(root).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
