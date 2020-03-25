import React from "react";
import * as Scroll from "react-scroll";
import "./main.scss";
import Header from "./../header/header.js";
import SideNav from "./../sideNav/sideNav.js";
import axios from "axios";
import API from "./../info.js";
import { Link } from "react-router-dom";
import home from "./../../assets/Home.png";

let ScrollLink = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

let answeredGreen = "null";
let answeredRed = "null";
let answeredRight = <div></div>;
let answeredWrong = <div></div>;



class Main extends React.Component {
  state = {
    single: {},
    video: [],
    firstLoad: true,
    answer: false
  };

  

  answer = event => {
    event.preventDefault();

    if (event.target.one.value == 1) {
      answeredGreen = "green";
      answeredRed = "red";

      answeredRight = <h2 className="right"> Correct </h2>;
      answeredWrong = <h2 className="wrong"> Incorrect </h2>;
    }

    this.setState({
      answer: true
    });
  };

  relatedSwitch = () => {
    this.setState({
      firstLoad: true
    });
  };

  render() {

    let checkLink = <div></div>;
    let checkQuiz = <div></div>;

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.props.match.params.id}&key=${API}`
      )
      .then(response => {
        if (this.state.firstLoad == true) {
          this.setState({
            single: response.data.items[0]
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

      
      if (this.props.match.params.id == "v1EuSWa6Fco") {
        
        checkLink = <ScrollLink
        to="target"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={1000}
        delay={0}
        isDynamic={true}
        className="studyVidContain"
      >
        <div className="studyImgContain">
          <img src={home} className="studyImg" />
        </div>
        <p>Quiz</p>
      </ScrollLink>;


        checkQuiz = <div name="target" className="mainVidContain">
          <form className="mainVideoContain" onSubmit={this.answer}>
            <div className="titleBar">
              {this.state.single.snippet && (
                <h2 className="mainVideoName">
                  {this.state.single.snippet.title} - Quiz
                </h2>
              )}
              <div className="line"></div>
            </div>

            <h3 className="Question">Question: Who you gonna call?</h3>

            <h3 className="Question">Chose 1 answer</h3>

            <div className="line"></div>

            <div className="optionContain">
              <button
                className={"answer " + answeredGreen}
                name="one"
                value={1}
                type="submit"
              >
                <h1 className="answerButtonText">A</h1>
              </button>

              <h2 className="answerText">Ghost Busters</h2>
              {answeredRight}
            </div>

            <div className="line"></div>

            <div className="optionContain">
              <button
                className={"answer " + answeredRed}
                name="two"
                value={2}
                type="submit"
              >
                <h1 className="answerButtonText">B</h1>
              </button>

              <h2 className="answerText">Saul</h2>
              {answeredWrong}
            </div>

            <div className="line"></div>

            <div className="optionContain">
              <button
                className={"answer " + answeredRed}
                name="three"
                value={3}
                type="submit"
              >
                <h1 className="answerButtonText">C</h1>
              </button>

              <h2 className="answerText"> 567 1111</h2>
              {answeredWrong}
            </div>

            <div className="line"></div>
          </form>
        </div>;

      }
    console.log(this.state.single);

    return (
      <>
        <Header></Header>
        <SideNav></SideNav>
        <div className="mainVidContain">
          <div className="mainVideoContain">
            <div className="titleBar">
              {this.state.single.snippet && (
                <h2 className="mainVideoName">
                  {this.state.single.snippet.title}
                </h2>
              )}
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
                <img className="profilePic" src={home} />
              </div>
              <div className="channelTextContain">
                {this.state.single.snippet && (
                  <h2>{this.state.single.snippet.channelTitle}</h2>
                )}
              </div>
            </div>
            <div className="descriptionContain">
              {this.state.single.snippet && (
                <p className="descriptionTextContain">
                  {this.state.single.snippet.description}
                </p>
              )}
            </div>
          </div>

          {/* Right Segment */}

          <div className="mainRight">
            <div className="studyContain">
              <div className="segmentHeader">
                <h2 className="mainVideoName">Study</h2>
                <div className="line"></div>
              </div>

              <div className="studyVidContain">
                <div className="studyImgContain">
                  <img src={home} className="studyImg" />
                </div>
                <p>Video</p>
              </div>
                {checkLink}
              
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
        
        {checkQuiz}
        
      </>
    );
  }
}

export default Main;
