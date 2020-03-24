import React from "react";
import "./main.scss";
import Header from "./../header/header.js";
import SideNav from "./../sideNav/sideNav.js";
import axios from "axios";
import API from "./../info.js";
import { Link } from "react-router-dom";
import home from "./../../assets/Home.png";

class Main extends React.Component {
  state = {
    single: {},
    video: [],
    firstLoad: true
  };

  relatedSwitch = () => {
    this.setState({
      firstLoad: true
    });
  };

  render() {
    
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.props.match.params.id}&key=${API}`
      )
      .then(response => {
        if (this.state.firstLoad == true) {
          this.setState({
            single: response.data.items[0],
            
          });
        }
      });



    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.props.match.params.id}&type=video&key=${API}`
      )
      .then(response => {
        if (this.state.firstLoad == true) {
          this.setState({
            video: response.data.items,
            firstLoad: false
          });
        }
      });

    console.log(this.props.match.params.id);

    return (
      <>
        <Header></Header>
        <SideNav></SideNav>
        <div className="mainVidContain">
          <div className="mainVideoContain">
            <div className="titleBar">
              {this.state.single.snippet && <h2 className="mainVideoName">{this.state.single.snippet.title}</h2>}
              <div className="line"></div>
              <div className="likeContain">
                <img className="likeButton" src={home} />
              </div>
            </div>
            <div className="embedContain">
              <iframe
                width="100%"
                height="100%"
                src={
                  "https://www.youtube.com/embed/" + this.props.match.params.id
                }
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="channelInfoContain">
              <div className="profilePicContain">
                <img className="profilePic" src={home}/>
              </div>
              <div className="channelTextContain">
              {this.state.single.snippet && <h2>{this.state.single.snippet.channelTitle}</h2>}
              </div>
            </div>
          </div>




          {/* Right Segment */}


          <div className="mainRight">
            <div className="studyContain">
              <div className="segmentHeader">
                <h2 className="mainVideoName">Study</h2>
                <div className="line"></div>
              </div>
            </div>

            {/* Recomended Vids */}

            <div className="relatedContain">
              <div className="segmentHeader">
                <h2 className="mainVideoName">Related</h2>
                <div className="line"></div>
              </div>

              <div className="mainResultContain">
                {this.state.video.map(info => {
                  return (
                    <React.Fragment>
                      <Link
                        to={"/video/" + info.id.videoId}
                        key={info.id.videoId}
                        className="mainSearchCard"
                        onClick={this.relatedSwitch}
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

                {/* Recomended Vids ends*/}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
