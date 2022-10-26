import MyImg from "../images/lorem.jpg"
 import React, {Component} from 'react'
 class Bio extends Component {
     render(){
         const myStyle={color:"blue" , fontSize:"1.2rem",margin:"7px",};
     return (
         <div >
             <img  src={MyImg} alt="Biophoto"  style={{width:"50px"}}/>
             <div >                
             <h5  style={{textTransform: "uppercase",margin:"10px",}}>{this.props.FullName}</h5>
             <span style = {myStyle}>Age:</span> {this.props.Age} <br/>
             <span style= {myStyle}>Bio:</span>{this.props.FullName} is {this.props.Age} years old, I like {this.props.Interests}
             </div>
         </div>
     )
 }}
 
 export default Bio;
 
 