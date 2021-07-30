import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import {createBrowserHistory} from "history"
import {hot} from "react-hot-loader";

const App = () => {
    return <BrowserRouter>
    <MainRouter />
</BrowserRouter>
}

export default hot(module)(App);
