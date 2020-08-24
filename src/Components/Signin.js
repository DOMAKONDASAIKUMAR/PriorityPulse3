import React from 'react'
import Container from 'react-bootstrap/Container'
import "../index.css"
import "../Fontawsm/Font"
import GoogleLogin from 'react-google-login';
function Signin() {
const sai = {
        maxWidth:"500px",marginTop:"14vh"
}
const g={
    marginTop:"20px",
    backgroundColor: "#5f62b9",
    color: "white",
    height:"49px",
    textAlign: "center",
    paddingLeft: "30px",  
 }
const sp={
  marginLeft:"auto",
  marginRight: "auto",
  fontSize: "20px"
}
const responseGoogle = (response) => {
  console.log(response);
}

return (
<div >

<Container className="form " style={sai}>
<div >
  <h2 >Sign in</h2>
<form>
  <div class="form-group mt-4">
    <label for="exampleInputEmail1">Email or Phone Number</label>
    <input pattern="([6-9][0-9]{9}|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$)" title="wrong" class="form-control pl-4" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email or Phone Number"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control pl-4" id="InputPassword1" placeholder="Password"></input>
  </div>
      <button type="submit " className=" form-control mt-4 mb-2  btn btn-info" style={{fontWeight:"500",fontSize:"20px"}}>Submit</button>
      <span className="">Dont have an account? <a href="/SignUp" style={{color:"#00e6e6"}}>SignUp </a> </span>
 <div className="gog">
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
</div>
 </form>
 </div>
</Container>
</div>
     
    )
}

export default Signin
