import React from "react";
import "./sideNav.scss";
import { Link } from 'react-router-dom';
import home from "./../../assets/Home.png"

class SideNav extends React.Component {

  
  render() {



    return (
      <>
        <div className="sideNav">
        <Link
                    to={"/search"}
                    className="sideNavLink"
        >
            <img className="sideNavImg" src={home}/>
            <h4 className="sideNavText">Home</h4>
        </Link>

        <Link
                    to={"/search"}
                    className="sideNavLink"
        >
            <img className="sideNavImg" src={home}/>
            <h4 className="sideNavText">Group Study</h4>
        </Link>

        <Link
                    to={"/search"}
                    className="sideNavLink"
        >
            <img className="sideNavImg" src={home}/>
            <h4 className="sideNavText">Quiz Results</h4>
        </Link>

        <Link
                    to={"/search"}
                    className="sideNavLink"
        >
            <img className="sideNavImg" src={home}/>
            <h4 className="sideNavText">Saved</h4>
        </Link>

        <Link
                    to={"/search"}
                    className="sideNavLink"
        >
            <img className="sideNavImg" src={home}/>
            <h4 className="sideNavText">History</h4>
        </Link>

        <Link
                    to={"/search"}
                    className="sideNavLink"
        >
            <img className="sideNavImg" src={home}/>
            <h4 className="sideNavText">Settings</h4>
        </Link>
        </div>
      </>
    );
  }
}

export default SideNav;