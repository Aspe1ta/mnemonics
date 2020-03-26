import React from "react";

import { Link } from 'react-router-dom';

import Header from "./../header/header.js";
import SideNav from "./../sideNav/sideNav.js";

import Save from "./../../assets/SavedVideos.png"


class Saved extends React.Component {

  
  render() {



    return (
      <>
    <Header></Header>
    <SideNav></SideNav>

        <div to="kin201" className="ImgContain">
            <img className="StudyGroupImg" src={Save}/>
        </div>

      </>
    );
  }
}

export default Saved;