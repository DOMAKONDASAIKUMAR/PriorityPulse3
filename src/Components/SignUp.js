import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import "../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function Signin() {
  const [pass, setpass] = useState(true)
  const [obj, setobj] = useState(faEyeSlash)
  const [text, settext] = useState("password")
  const click = () => {
    setobj((pass) ? faEye : faEyeSlash)
    setpass(!pass);
    settext((pass) ? "text" : "password")
  }
  const [text1, settext1] = useState("password")
  const [pass1, setpass1] = useState(true)
  const [obj1, setobj1] = useState(faEyeSlash)
  const click1 = () => {
    setobj1((pass1) ? faEye : faEyeSlash)
    setpass1(!pass1);
    settext1((pass1) ? "text" : "password")
  }
  
  
  const sai = {
    maxWidth: "500px", marginTop: "12.5vh"
  }
  const g = {
    marginTop: "20px",
    backgroundColor: "#5f62b9",
    color: "white",
    height: "49px",
    textAlign: "center",
    paddingLeft: "30px",
  }
  const sp = {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "20px"
  }
  const responseGoogle = (response) => {
    console.log(response);
  }
  const [lex, setlex] = useState("")
  const [col,setcol]=useState("")
  const fun = (s) => {
    if(s.length<=1)setlex("")
    if (s.length >1 && s.length <= 3) {
      setlex("Bad")
      setcol("red")

    }
    if (s.length >3 && s.length <= 7) {
      setlex("Good")
      setcol("orange")
    }
    if (s.length >=7) {
      setlex("Strong")
      setcol("Green")
    }

  }

return (
<div >

<Container className="form " style={sai}>
<div >
  <h2 >Sign Up</h2>
<form>
  <div class="form-group mt-4">
    <label for="exampleInputEmail1">Email or Phone Number</label>
    <input  pattern="([0-9]{10}|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$)" title="Please Enter a valid Email or Phone Number" class="form-control pl-4" name="Mail" required id="InputEmail1" aria-describedby="emailHelp" placeholder="Email or Phone Number"></input>
  </div>
  <div class="form-group" style={{position:"relative"}}>
    <label for="exampleInputPassword1">Password</label>
            <input type={text1} class="form-control pl-4" id="InputPassword1" required placeholder="Password" name="pass1" onChange={(e) => fun(e.target.value)}></input><span className="sn" onClick={() => click1()}><FontAwesomeIcon icon={obj1} /></span><span class="km" style={{ color: col ,fontSize:"17px"}}>{lex}</span>
          </div>
          <div class="form-group" style={{position:"relative"}} >
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type={text} class="form-control pl-4" id="InputPassword1" required placeholder="Confirm Password" name="pass"></input><span className="sn" onClick={()=>click()}><FontAwesomeIcon icon={obj}/></span>
          </div>
          <div class="form-group " >
    <label for="exampleInputPassword1">Unique Code </label>
     <input type="text"  class="form-control pl-4" id="InputPassword1" name="code" required placeholder="Unique Code " />
     </div>  
      <button type="submit " className=" form-control mt-4 mb-2  btn btn-info" style={{fontWeight:"500",fontSize:"20px"}}>Submit</button>
      <span className="">Already have an account? <a href="/Signin" style={{color:"#00e6e6"}}>Signin </a> </span>
 {/* <div className="gog">
      <GoogleLogin
      clientId="339274152306-d05fu5bdmjlq57s9nrid52p75lcm37g5.apps.googleusercontent.com"
      render={renderProps => (
      <button onClick={renderProps.onClick} style={g} disabled={renderProps.disabled} className="form-control d-flex" >
        <img src="https://img.icons8.com/color/36/000000/google-logo.png" />
        <span style={sp}>Continue with Google</span></button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'} />
</div> */}
 </form>
 </div>
</Container>
</div>
     
    )
}

export default Signin
