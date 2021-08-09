import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import {createBrowserHistory} from "history"
import {hot} from "react-hot-loader";
import { Grommet } from 'grommet';

const theme = {
    global: {
      font: {
        family: 'Raleway, sans-serif',
        size: '1rem',
        height: '24px',
      },
      colors: {
          control: "rgba(12, 230, 23, 0.5)"
      },
      padding: 0,
      margin: 0,
      box: {
        sizing: 'border-box'
     },
     
    },
    radioButton: {
        border: {
            color: "rgba(12, 230, 13, 0.2)"
        }
    }
  };

const App = () => {
    return <BrowserRouter>
    <Grommet theme={theme}>
        <MainRouter />
    </Grommet>
</BrowserRouter>
}

export default hot(module)(App);
