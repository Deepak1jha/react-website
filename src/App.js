import React from 'react';
import './App.css';
import Navbar from "./component/navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
