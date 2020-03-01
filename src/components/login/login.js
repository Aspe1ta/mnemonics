import React from "react";
import "./login.scss";
import Header from "./../header/header.js";


class Login extends React.Component {


  render() {
    

      return (
        <>
          <Header></Header>
          
          <div className="loginContain">
            <div className="formContain">
                <h1 className="loginText">Login</h1>
                <form className="loginForm">
                    <input className="loginInput" placeholder="Username"></input>
                    <input className="loginInput" type="password" placeholder="Password"></input>
                    <div className="bottomFormContain">
                        <p className="loginBottomText">idk what this text says</p>
                        <button className="loginButton">Login</button>
                    </div>
                </form>
            </div>

            <div className="registerContain">

            </div>

          </div>
        </>
      );
    
  }
}

export default Login;
