import React from "react";


import FullName from "./Profile/FullName";
import Bio from "./Profile/Bio";
import Profession from "./Profile/Profession";


 
function App() {
  const firstName="marouan"
  const handleEvent = () => {
    // alert();
    alert(`hello${firstName}`)
  };
  return (
    <>
    
    <body style={{margin:"150px 100px",fontSize:"1.2rem"}}>
    <h1>mon Profile</h1>
  
      <FullName firstName={firstName} lastName="rhif" handleEvent={handleEvent}>
      <p>Glad to know you</p>
      </FullName>
      <br/>
      <div style={{border:"black double",  marginTop:"20px", background:"green"}} id="about">
      <Bio FullName="rhif marouen" Age="32" Gender="homme" Interests=" Coding.., coding.., and coding.. "  />
      </div>
      <br/>
      
      <div id="profession"><Profession/></div>
      
      {/* <button onClick={handleEvent}>User</button> */}
    </body>
    

    </>
  );
}
export default App;

