import React from "react";
import "./intro.scss";
import Header from "./../header/header.js";
import { Link } from "react-router-dom";
import introImg from "./../../assets/introImg.jpg";

class Intro extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <div>
          <div className="IntroContain">
            <div className="introLeft">
              <div className="IntroInfoContain">
                <h1 className="introTitleText">Channel Your Inner Genius</h1>
                <h3 className="introSubtitleText">
                  We make learning easy with mnemonic content
                </h3>

                <Link to="/search" className="TryButton">
                  <h2 className="tryText">Try It Now!</h2>
                </Link>
              </div>
            </div>

            <div className="IntroImgContain">
              <img className="IntroImg" src={introImg} />
            </div>

            <div className="arrowContain">
              <div className="arrow"> </div>
            </div>

            <div className="introRight"></div>
          </div>

          <div className="howContain">
            <h1 className="howHeader">How it works</h1>

            <div className="howBox">
              <div className="Step1Contain"></div>

              <div className="Step1Contain"></div>

              <div className="Step1Contain"></div>
            </div>
          </div>

          <div className="aboutContain">
            <h1 className="aboutHeader">About</h1>

            <div className="textImgContain">
              <div className="aboutTextContain">
                <h1 className="whatHeader">What is a "Mnemonic"?</h1>
                <p className="paraHeader">
                  A mnemonic or mnemonic device is any technique that helps
                  people memorize and retain information.
                </p>
                <p className="paraHeader">
                  The most common mnemonic that you might have used, is
                  memorizeing the ABC's through song.
                </p>
              </div>

              <div className="abcContain"></div>
            </div>

            <div className="textImgContain">
              

              <div className="screenContain"></div>

              <div className="aboutWhatContain">
                <h1 className="whatHeader">What We Do</h1>
                <p className="paraHeader">
                  We provide an all in one platform for mnemonic content without any distractions.
                </p>
                <p className="paraHeader">
                  We have the tools to help you learn new things, and retain them much more easily.
                </p>
              </div>

            </div>

          </div>

          <div className="IntroContain">
            <div className="introLeft">
              <div className="compassInfoContain">
                <h1 className="introTitleText">Never Eat Sour Watermelon!</h1>
                <h2 className="compassText">We got our name from a mnemonic device, can you guess what it is?</h2>
                <h2 className="compassHintText">Hint:</h2>
                <h2 className="compassText">How do you remember the directions on a compass? (North, South, East, West)</h2>
                <h2 className="compassHintText">We like to say:</h2>
                <h2 className="compassText">Never Eat Sour Watermelon!</h2>
                
                
                
              </div>
            </div>

            

            

            <div className="introRight">
              <div className="compassContain">
                
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Intro;
