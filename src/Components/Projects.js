import React,{Component} from "react"
import { Tabs,Tab,Grid,Cell} from "react-mdl";
import ReactProject from "./Projects/ReactProjects";
import PythonProject from "./Projects/PythonProject";
import JavascriptProject from "./Projects/JavascriptProjects"
import WebDevProject from "./Projects/WebDevProject"

class Projects extends Component{
    constructor(props){
        super(props);
        this.state  = {activeTab: 0}
    }
    
    // Tabs content 
  toggleCategories(){
    //   Recat Tab content
    if(this.state.activeTab === 0){
        return(
         <ReactProject/>
         
        )
    }
    // Python Tab content
    else if(this.state.activeTab === 1){
        return(
           <PythonProject/>
        )
    } 
    // Html/Boostrap/CSS tab content
    else if(this.state.activeTab === 2){
        return(
            <JavascriptProject/>
        )
    }
    // Javascript Tab Content
    else if(this.state.activeTab === 3){
        return(
            <div className = "projectBackground">
                <WebDevProject/>
            </div>
        )
    }
  }
    render(){
        return(
            <div className = "Category-Tab">
                {/* Tbs from react mdl for diffrent projects */}
                <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Html/Css/Boostrap</Tab>
                </Tabs>
                <section className = "project-grid">
                    <Grid>
                        <Cell col ={12}>
                            <div className = "content">
                            {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
export default Projects;