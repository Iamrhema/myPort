import React,{Component} from 'react';
import {Navigation, Drawer, Layout,Header,Content} from "react-mdl";
import Main from "./Components/Main";
import {NavLink} from "react-router-dom"
import Icon from "./Images/Rhema1.png";
import "./bootstrap/css/bootstrap.css";
import './App.css';


class App extends Component{
  render(){
    return(
        <div>
            {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
            <div className="demo-big-content">
            <Layout>
                <Header className = "header-color" title="Rhema Makamba" scroll>
                    {/* Top navbar */}
                    <Navigation>
                    <NavLink  to= "/"><img className = "iconLink" src = {Icon} alt = "Icon me"/></NavLink>
                    <NavLink style = {{fontWeight: "bold"}} to= "/">Home</NavLink>
                        <NavLink  style = {{fontWeight: "bold"}} to="/Projects" >Projects</NavLink>
                        <NavLink  style = {{fontWeight: "bold"}} to="/Cv">Cv</NavLink>
                        <NavLink style = {{fontWeight: "bold"}} to="/Contact">Contact</NavLink>
                 </Navigation>
                </Header>
            <Drawer title="Rhema Makambaa">
                <Navigation>
                    {/* Side navigation */}
                <NavLink  to= "/"><img className = "iconLink" src = {Icon} alt = "Icon me"/></NavLink>
                    <NavLink style = {{fontWeight: "bold"}} to= "/">Home</NavLink>
                    <NavLink style = {{fontWeight: "bold"}} to="/Projects" >Projects</NavLink>
                    <NavLink style = {{fontWeight: "bold"}} to="/Cv">Cv</NavLink>
                    <NavLink style = {{fontWeight: "bold"}} to="/Contact">Contact</NavLink>
                </Navigation>
            </Drawer>
            <Content> 
                <Main/>
            </Content>
    </Layout>
</div>
        </div>
    )
  }
  }

export default App;
