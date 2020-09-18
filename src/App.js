import React from 'react';
import './App.css';
import Navbar from "./component/navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
