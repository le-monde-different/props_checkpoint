import React from 'react';

const FullName = (props) => {
  
    console.log(props);
   
    const myStyle={
        textAlign:"center",
        color:"#000",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }
    return (
        <div style ={{color:"black",textAlign:"center"}}>
    {/* <h1 style={myStyle}>  {props.firstName} {props.lastName}</h1> */}
    <button onClick={()=>props.handleEvent()}>click</button>
    {/* the props.children houni shiha ou nn ??*/}
    {/* {props.children} */}
        </div>

    );
};

export default FullName;