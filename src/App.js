import React from 'react';
import './App.css';
import Navbar from "./component/navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Product";
import Services from "./pages/services/Services";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Products}/>
          <Route path="/services" component={Services}/>
          <Route path="/sign-up" component={SignUp}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
