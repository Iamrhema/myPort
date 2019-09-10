import React,{Component} from "react"
import ErrorPic from "../Images/z-247-512.png";

class Error extends Component{
    render(){
        return(
            <div className = "error text-center">
                <img src= {ErrorPic} alt = "error"/>
                <h1>ERROR Path Doesnt exist</h1>
            </div>
        )
    }
}
export default Error;