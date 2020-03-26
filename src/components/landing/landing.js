import React from "react";
import { Link } from 'react-router-dom';
import "./landing.scss";
import Header from "./../header/header.js";
import Search from "./../search/search.js";
import icon from "./../../assets/search.png"

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", mode: "land", pull: [{}], update: 0 };

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.setState({ query: this.state.query, mode: "search" });
  }

  render() {
    console.log(this.props.location);

    return (
      <>
        <Header call={this.props.call}></Header>

        <div className="landContain">
          <div className="mainContain">
            
            <div className="mainSearch">
              <form className="mainForm" onSubmit={this.props.call}>
                <input name={"search"} type="search" placeholder="What do you want to learn?" />
                <button className="HeadersearchButton">
                  <img className="searchIcon" src={icon}/>
                  <h2 className="searchButtonText">Search</h2>
                </button>
              </form>
            </div>


            
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
