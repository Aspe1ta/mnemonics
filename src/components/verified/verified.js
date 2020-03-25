import React from "react";
import "./verified.scss";
import Header from "./../header/header.js";
import { Link } from "react-router-dom";


class Verified extends React.Component {


  render() {
    

      return (
        <>
          <Header></Header>
          
          <div className="loginContain">
          <div className="formContain">
            <h1 className="loginText">Sign Up</h1>
            <form className="loginForm">
              <div className="verBottomFormContain">
                

                <Link to={"/search"} key="login" className="loginButton">
                  <h2>Learn</h2>
                </Link>
              </div>
            </form>
          </div>

          <div className="registerContain">
            <h1>You're on you way to easily learning new things!</h1>
          </div>
        </div>
      
        </>
      );
    
  }
}

export default Verified;