import React from "react";
import "./main.scss";
import Header from "./../header/header.js";
import axios from "axios";
import API from "./../info.js";
import { Link } from "react-router-dom";

class Main extends React.Component {
  state = {
    video: [],
    firstLoad: true
  };

  relatedSwitch = () => {
    this.setState({
          firstLoad: true
        });
  }

  render() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.props.match.params.id}&type=video&key=${API}`
      )
      .then(response => {
        if (this.state.firstLoad == true){
        this.setState({
          video: response.data.items,
          firstLoad: false
        });
      }});

    console.log(this.state.video);

    return (
      <>
        <Header></Header>
        <h1>Here we go</h1>
        <div>
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + this.props.match.params.id}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="resultContain">
            {this.state.video.map(info => {
              return (
                <React.Fragment>
                  <Link
                    to={"/video/" + info.id.videoId}
                    key={info.id.videoId}
                    className="searchCard"
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
                        <h4 className="channelName">{info.snippet.channelTitle}</h4>
                      </div>
                      
                    </div>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
      </>
    );
  }
}

export default Main;
