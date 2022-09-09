import { createRoot } from "react-dom/client";
import React from "react";
import App from "./app";
import "./index.scss";

const root = createRoot(document.querySelector("#app")!);

root.render(<App />);
