import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Game from "./Game";
  import Forum from "./Forum";
  import Events from "./Events";
  import Trade from "./Trade";
  import Shop from "./Shop";

  class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Game">Game</NavLink></li>
            <li><NavLink to="/Forum">Forum</NavLink></li>
            <li><NavLink to="/Events">Events</NavLink></li>
            <li><NavLink to="/Trade">Trade</NavLink></li>
            <li><NavLink to="/Shop">Shop</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/Game" component={Game}/>
            <Route path="/Forum" component={Forum}/>
            <Route path="/Events" component={Events}/>
            <Route path="/Trade" component={Trade}/>
            <Route path="/Shop" component={Shop}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;