import React from "react"
import {
  CardText,
  Card,
  CardActions,
  CardTitle,
  IconButton,
  Button,
  MenuItem,
  Menu
} from "react-mdl";
import { CardMenu } from "react-mdl/lib/Card";

const ReactProject = ()=> (
                 <div className = "row">
                  <div className ="projectDiv">
                    <Card shadow={5} style={{minWidth:"450",margin:"auto", }}>
                      <CardTitle className ="react" style={{color: "#fff", height: "176px"}}><div className="ProjectName text-center">Basic Calculator</div></CardTitle>
                        <CardText>Basic Calculator creted using react only with no libraries.</CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Iamrhema/React-Calculator"  rel="noopener noreferrer" target="_blank">Github</a></Button>
                            <Button colored><a href = "https://m-cal-rhema.herokuapp.com/"   rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style = {{color:"white" }}>
                         <IconButton name="more_vert" id="demo-menu-lower-right" />
                           <Menu target="demo-menu-lower-right" align="right">
                             <MenuItem>boostrap</MenuItem>
                           </Menu>
                         </CardMenu>          
                      </Card>
                    </div>
                  
                    
                 </div>
)

export default ReactProject;