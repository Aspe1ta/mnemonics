import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "./search.scss";
import Header from "./../header/header.js";
import SideNav from "./../sideNav/sideNav.js";
import SearchTab from "./../info.js";
import thumb from "./../../assets/thumb.jpg";
import { Link } from "react-router-dom";


let spectrum = /planet/i;

class Search extends React.Component {
  state = {
    Data: "",
    pull: []
  };

  

  render() {

    console.log(this.props.info)

    

    let sour = <div></div>;

    if (this.props.info.search(spectrum) == !-1) {
      sour = <div className="sourContain">
      <div className="studyContain">
        <div className="segmentHeader">
          <h2 className="searchMainVideoName">Recommended by us</h2>
          <div className="searchLine"></div>
        </div>
      </div>

      <Link
        to={"/video/v1EuSWa6Fco"}
        key="v1EuSWa6Fco"
        className="sourSearchCard"
      >
        <div className="cardThumb">
          <img src={thumb} className="cardImg" />
        </div>

        <div className="cardTextContain">
          <h3 className="cardText">Learn The Planets - Song (Mom's Spaghetti)</h3>
          <div className="ByContain">
            <h3 className="By">By:</h3>
            <h4 className="channelName">SourOri</h4>
          </div>
        </div>
      </Link>
    </div>
    };

    console.log(this.state.pull);

    return (
      <>
        <Header call={this.props.call}></Header>
        <SideNav></SideNav>
        <div className="searchPage">
          <div className="headerPad"></div>

          {sour}
          {/* <div className="sourContain">
            <div className="studyContain">
              <div className="segmentHeader">
                <h2 className="searchMainVideoName">Recommended by us</h2>
                <div className="searchLine"></div>
              </div>
            </div>

            <Link
              to={"/video/v1EuSWa6Fco"}
              key="v1EuSWa6Fco"
              className="sourSearchCard"
            >
              <div className="cardThumb">
                <img src={thumb} className="cardImg" />
              </div>

              <div className="cardTextContain">
                <h3 className="cardText">Title</h3>
                <div className="ByContain">
                  <h3 className="By">By:</h3>
                  <h4 className="channelName">Justin</h4>
                </div>
              </div>
            </Link>
          </div> */}

          <div className="resultContain">
            <div className="studyContain">
              <div className="segmentHeader">
                <h2 className="searchMainVideoName">More...</h2>
                <div className="searchLine"></div>
              </div>
            </div>

            {this.props.pull.map(info => {
              return (
                <React.Fragment>
                  <Link
                    to={"/video/" + info.id.videoId}
                    key={info.id.videoId}
                    className="searchCard"
                  >
                    <div className="cardThumb">
                      <img
                        src={info.snippet.thumbnails.medium.url}
                        className="cardImg"
                      />
                    </div>

                    <div className="cardTextContain">
                      <h3 className="cardText">{info.snippet.title}</h3>
                      <div className="ByContain">
                        <h3 className="By">By:</h3>
                        <h4 className="channelName">
                          {info.snippet.channelTitle}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
