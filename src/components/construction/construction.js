import React from "react";

import "./construction.scss";

import Header from "./../header/header.js";
import SideNav from "./../sideNav/sideNav.js";


class Construction extends React.Component {

  
  render() {



    return (
      <>
    <Header></Header>
    <SideNav></SideNav>

        <div className="constructionText">
          <h1>Unfortunately This Feature Is Unavailable Right Now</h1>
        </div>
      </>
    );
  }
}

export default Construction;