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
                <h1 className="loginText">Verified!</h1>
                
            </div>

            
          </div>
        </>
      );
    
  }
}

export default Verified;