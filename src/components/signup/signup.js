import React from "react";
import "./signup.scss";
import Header from "./../header/header.js";
import { Link } from "react-router-dom";


class Signup extends React.Component {
  

  render() {
    

      return (
        <>
          <Header></Header>
          <div className="loginContain">
            <div className="formContain">
                <h1 className="loginText">Sign Up</h1>
                <form className="loginForm">
                    <input className="loginInput" placeholder="Username"></input>
                    <input className="loginInput" type="password" placeholder="Password"></input>
                    <input className="loginInput" placeholder="Student Email"></input>
                    <div className="bottomFormContain">
                        <p className="loginBottomText">idk what this text says</p>
                        
                        <button className="loginButton">Create Account</button>
                        
                    </div>
                </form>
            </div>

            <div className="registerContain">
              <h1>Access to thousands of study materials await you</h1>
            </div>

          </div>
          
        </>
      );
    
  }
}

export default Signup;