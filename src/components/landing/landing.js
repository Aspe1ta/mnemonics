import React from "react";
import "./landing.scss";
import Header from "./../header/header.js"

class Landing extends React.Component {
      
    render() {
      return (
        <>
        <Header></Header>
        
         <div className="landContain">
            <div className="mainContain">
                <div className="mainLogoContain">
                    <h1>Mnemonicon</h1>
                </div> 
                <div className="mainSearch">

                </div>
                <div className="mainSub">

                </div>
            </div>
         </div>
        </>
      );
    }
  }
  
  export default Landing;