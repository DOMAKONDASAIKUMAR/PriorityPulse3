import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Head from './Components/Header'
import Foot from './Components/Foot'
import Signin from "./Components/Signin"
import SignUp from './Components/SignUp'
class App extends Component {
  render() {
    return (
      <>
            <main style={{
          minHeight:"100vh",
          display: "flex",
          flexDirection: "column",
        backgroundColor:"#fdfdfd"
      }}>
                <Head></Head>
          <Switch>
             <Route path="/Signup" component={SignUp} />
            <Route path="/Signin" component={Signin} />
            <Redirect to="/Signup" />
                </Switch>
                <Foot></Foot>
            </main>
            
      </>
    );
  }
}

export default App;
