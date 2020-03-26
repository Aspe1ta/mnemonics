import React from "react";
import "./studyGroup.scss";
import { Link } from 'react-router-dom';

import Header from "./../header/header.js";
import SideNav from "./../sideNav/sideNav.js";

import StudyImg from "./../../assets/AustinAssets-26.png"


class StudyGroup extends React.Component {

  
  render() {



    return (
      <>
    <Header></Header>
    <SideNav></SideNav>

        <Link to="kin201" className="ImgContain">
            <img className="StudyGroupImg" src={StudyImg}/>
        </Link>
      </>
    );
  }
}

export default StudyGroup;