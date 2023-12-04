import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { WorkoutContextProvider } from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
  </AuthContextProvider>
);
