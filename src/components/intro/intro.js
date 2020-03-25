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
              <h1 className="introTitleText">
                Learning Made <span>EASY.</span>
              </h1>
              <h3 className="introSubtitleText">
                We make learning content as easy as your ABC's with simple and
                fun mnemonics:
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

          <div className= "introRight">
            
          </div>

          </div>

          

          <div className="howContain">
            <h2 className="introSecTextW">How it works</h2>
          </div>

          <div className="planContain">
            <h2 className="introSecTextB">Plans & Features</h2>
            <div className="studentContain">
              <h3>Students</h3>
            </div>
            <div className="teachersContain">
              <h3>Teachers</h3>
            </div>
            <div className="anyoneContain">
              <h3>Anyone</h3>
            </div>
          </div>

          <div className="whyContain">
            <h3 className="introSecTextW">Why Sour Watermelon</h3>
          </div>

          <div className="faqContain">
            <h2 className="introSecTextB">FAQ</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Intro;
