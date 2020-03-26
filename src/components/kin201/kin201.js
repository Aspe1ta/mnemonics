import React from "react";

import { Link } from 'react-router-dom';

import Header from "./../header/header.js";
import SideNav from "./../sideNav/sideNav.js";

import groupImg from "./../../assets/AustinAssets-26.png";


class Kin201 extends React.Component {

  
  render() {



    return (
      <>
    <Header></Header>
    <SideNav></SideNav>

        <Link to="kin201" className="ImgContain">
            <img className="StudyGroupImg" src={groupImg}/>
        </Link>
      </>
    );
  }
}

export default Kin201;