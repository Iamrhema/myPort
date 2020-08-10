import React from "react";
import {Switch, Route} from "react-router-dom";
import Project from "./Projects"
import myProps from "./prop";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Error from "./Error";

const Main = ()=>(
    <Switch>
    <Route exact path="/" component = {LandingPage} />
    <Route exact path="/Contact" component = {Contact}/>
    <Route exact path="/Projects" component = {Project} />
    <Route exact component = {Error}/>
</Switch>
);
 


export default Main;