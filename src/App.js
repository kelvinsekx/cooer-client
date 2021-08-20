import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import {hot} from "react-hot-loader";
import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Raleway, sans-serif',
      size: '1.1rem',
      height: '1.6rem',
    },
    colors: {
        control: "rgba(12, 230, 23, 0.8)"
    },
    padding: 0,
    margin: 0,
    box: {
      sizing: 'border-box'
    },
    input: {
      font: {
        weight: "200"
      }
    }
  },
  radioButton: {
      border: {
          color: "rgba(12, 230, 13, 0.2)"
      }
  },
};

const App = () => {
    return <BrowserRouter>
    <Grommet theme={theme}>
        <MainRouter />
    </Grommet>
</BrowserRouter>
}

export default hot(module)(App);
