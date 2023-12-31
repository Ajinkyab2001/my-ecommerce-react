import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Context/CartContext";
import Context from "./Context/Context";
import { BrowserRouter } from "react-router-dom";
import AuthcontextProvider from "./Context/AuthContext/AuthcontextProvider";
// import AuthcontextProvider from './Context/AuthContext/AuthcontextProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <AuthcontextProvider>
        
        <Context>
          <App />
        </Context>
      </AuthcontextProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
