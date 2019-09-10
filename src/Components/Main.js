import React from "react";
import {Switch, Route} from "react-router-dom";
import Project from "./Projects"
import Cv from "./Cv";
import About from "./Aboutme";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Error from "./Error";

const Main = ()=>(
    <Switch>
    <Route exact path="/" component = {LandingPage} />
    <Route exact path="/Contact" component = {Contact}/>
    <Route exact path="/Cv" component = {Cv} /> 
    <Route exact path="/Projects" component = {Project} />
    <Route exact component = {Error}/>
</Switch>
);
 


export default Main;