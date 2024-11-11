import React from "react";
import ReactDOM from "react-dom/client";
import App from "./people_of_interest/App";
import "../css/app.scss";
import { BrowserRouter } from "react-router-dom";

let root = ReactDOM.createRoot(document.querySelector("#people-of-interest"));

root.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
);
