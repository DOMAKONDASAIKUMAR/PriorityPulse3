import React, { Children } from "react"
import ReactDOM from "react-dom"
import Signin from './Signin'
import Foot from './Foot'
import Signout from "./Signout"
import "./Fontawsm/Font"
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App(){
    return  ( 
      <div style={{
          minHeight:"100vh",
          display: "flex",
          flexDirection: "column",
        backgroundColor:"#fdfdfd"
      }}> 
     
        {/* <Signin></Signin> */}
        <Signin></Signin>
        {/* <Signout></Signout> */}
          <Foot></Foot>
         
          </div>
        );
}

ReactDOM.render(<App/>,document.getElementById("root"));