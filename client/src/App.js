import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Books from "./pages/Books";

function App() {
    return (
<Router>
<div>
  <header>Allo.</header>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          {/* <Route exact path="/books" component={Books} /> */}
          {/* <Route exact path="/search" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>



</Router>
    );
  }

export default App;
