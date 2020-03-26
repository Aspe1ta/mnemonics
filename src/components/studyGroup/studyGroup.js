import React from "react";
import "./studyGroup.scss";
import { Link } from 'react-router-dom';

import Header from "./../header/header.js";
import SideNav from "./../sideNav/sideNav.js";

import studyPage from "./../../assets/StudyGroups.png";


class StudyGroup extends React.Component {

  
  render() {



    return (
      <>
    <Header></Header>
    <SideNav></SideNav>

        <Link to="kin201" className="ImgContain">
            <img className="StudyGroupImg" src={studyPage}/>
        </Link>
      </>
    );
  }
}

export default StudyGroup;