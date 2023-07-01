import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { QuizProvider } from "./context/QuizContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
