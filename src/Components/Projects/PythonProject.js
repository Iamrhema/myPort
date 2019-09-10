import React from "react"
import {  CardText,Card,CardActions,CardTitle,IconButton,Button } from "react-mdl";
import { CardMenu } from "react-mdl/lib/Card";


const PythonProjects = ()=>(
    <div className = "row">
    {/* Project */}
    <div className ="projectDiv">
    <Card shadow={5} style={{minWidth:"450",margin:"auto", }}>
      <CardTitle className ="Python" style={{color: "white", height: "176px"}}> <div className="ProjectName text-center">Holiday calculator</div></CardTitle>
      
        <CardText>Simple Javascript Project that calculates the cost of going for holiday in Port Elizabeth or Johannesburg</CardText>
        <CardActions border>
            <Button colored><a href = "https://github.com/Iamrhema/Projects/blob/master/Python/holiday.py" rel = "noopener noreferrer" target = "_blank">Github</a></Button>
            <Button colored> <a href = "https://repl.it/@RhemaExel/Holiday-calculator" rel = "noopener noreferrer" target = "_blank">Live Demo</a></Button>
        </CardActions>         
      </Card>
    </div>


    {/* Project 2 */}
    <div className ="projectDiv">
    <Card shadow={5} style={{minWidth:"450",margin:"auto", }}>
      <CardTitle className ="Python" style={{color: "white", height: "176px"}}> <div className="ProjectName text-center">Shipment Calculator</div></CardTitle>
        <CardText>This is a simple shipment calculator that calculates  how much shipping cost for a user buying or sending a parcel abroad.</CardText>
        <CardActions border>
            <Button colored><a href = "https://github.com/Iamrhema/Projects/blob/master/Python/Shipment%20Calculator.py" rel = "noopener noreferrer" target = "_blank">Github</a></Button>
            <Button colored><a href = "https://repl.it/@RhemaExel/Shipment-Calculator" rel = "noopener noreferrer" target = "_blank">Live Demo</a></Button>
        </CardActions>         
      </Card>

    </div>
    {/* project 3 */}
    <div className ="projectDiv">
    <Card shadow={5} style={{minWidth:"450",margin:"auto", }}>
      <CardTitle className ="Python" style={{color: "white", height: "176px"}}> <div className="ProjectName text-center">Salary Calculator</div></CardTitle>
        <CardText>This a Salary Checker which calculates your Salary and compares it for you.</CardText>
        <CardActions border>
        <Button colored><a href = "https://github.com/Iamrhema/Projects/blob/master/Python/Salary%20checker.py" rel = "noopener noreferrer" target = "_blank">Github</a></Button>
        <Button colored><a href = "https://repl.it/@RhemaExel/Shipment-Calculator" rel = "noopener noreferrer" target = "_blank">Live Demo</a></Button>
        </CardActions>         
      </Card>
    </div>
     
   {/* project 4*/}
    <div className ="projectDiv">
    <Card shadow={5} style={{minWidth:"450",margin:"auto", }}>
      <CardTitle className ="Python" style={{color: "white", height: "176px"}}> <div className="ProjectName text-center">Password Validator</div></CardTitle>
        <CardText>This code checks for the password if it's reliable to use e.g  if it contains uppercase letters and numbers </CardText>
        <CardActions border>
        <Button colored><a href = "https://repl.it/@RhemaExel/Password-checker" rel = "noopener noreferrer" target = "_blank">Github</a></Button>
        <Button colored><a href = "https://github.com/Iamrhema/Projects/blob/master/Python/Password.py" rel = "noopener noreferrer" target = "_blank">Live Demo</a></Button>
        </CardActions>         
      </Card>
    </div>

       {/* project 5*/}
       <div className ="projectDiv">
    <Card shadow={5} style={{minWidth:"450",margin:"auto", }}>
      <CardTitle className ="Python" style={{color: "white", height: "176px"}}> <div className="ProjectName text-center">Outfit Checker</div></CardTitle>
        <CardText>This code checks for the password if it's reliable to use e.g  if it contains uppercase letters and numbers </CardText>
        <CardActions border>
        <Button colored><a href = "https://github.com/Iamrhema/Projects/blob/master/Python/OutFit%20checker.py" rel = "noopener noreferrer" target = "_blank">Github</a></Button>
        <Button colored><a href = "https://repl.it/@RhemaExel/Outfit-Picker" rel = "noopener noreferrer" target = "_blank">Live Demo</a></Button>
        </CardActions>         
      </Card>
    </div>

           {/* project 6*/}
           <div className ="projectDiv">
    <Card shadow={5} style={{minWidth:"450",margin:"auto", }}>
      <CardTitle className ="Python" style={{color: "white", height: "176px"}}> <div className="ProjectName text-center">Binary</div></CardTitle>
        <CardText>This program converts binary to integers</CardText>
        <CardActions border>
        <Button colored><a href = "https://github.com/Iamrhema/Projects/blob/master/Python/Binary.py" rel = "noopener noreferrer" target = "_blank">Github</a></Button>
        <Button colored><a href = "https://repl.it/@RhemaExel/Binary" rel = "noopener noreferrer" target = "_blank">Live Demo</a></Button>
        </CardActions>         
      </Card>
    </div>

               {/* project 6*/}
               <div className ="projectDiv">
    <Card shadow={5} style={{minWidth:"450",margin:"auto", }}>
      <CardTitle className ="Python" style={{color: "white", height: "176px"}}> <div className="ProjectName text-center">Sickle Disease</div></CardTitle>
        <CardText>This code finds the effects that stimulate Single Nucleotide Polymorphism that leads to Sickle Disease.</CardText>
        <CardActions border>
        <Button colored><a href = "https://github.com/Iamrhema/Projects/tree/master/Python/Sickle%20Disease" rel = "noopener noreferrer" target = "_blank">Github</a></Button>
        <Button colored><a href = "https://repl.it/@RhemaExel/Sickle-Disease" rel = "noopener noreferrer" target = "_blank">Live Demo</a></Button>
        </CardActions>         
      </Card>
    </div>


</div>
)

export default PythonProjects;