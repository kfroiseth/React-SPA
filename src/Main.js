import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

//react router works by defining a) nav links b)the container to load your content into

class Main extends Component {
  render() {
    return (
      //define routing region with <HashRouter></HashRouter>
      <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
        {/*update `a href` to `NavLink to`*/}
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="content">
          {/*match URl with content by using Route component, which contains a path prop*/}
          <Route exact path="/" component={Home}/>
          <Route path="/Stuff" component={Stuff} />
          <Route path="/Contact" component={Contact} />
        </div>
      </div>
      </HashRouter>
    );
    }
  }


export default Main;
