import React from "react";
import "./intro.scss";
import * as Scroll from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import Header from "./../header/header.js";
import { Link } from "react-router-dom";
import introImg from "./../../assets/introImg.png";

import trophy from "./../../assets/Trophy.png";

import Step1 from "./../../assets/Step1.png";
import Step2 from "./../../assets/Step2.png"
import Step3 from "./../../assets/Step3.png"
import ABC from "./../../assets/ABC.png";
import Screen from "./../../assets/Screen.png";
import Compass from "./../../assets/Compass.png";
import Prices from "./../../assets/Prices.png";

let ScrollLink = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

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

            <ScrollLink
        to="About"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        duration={2000}
        delay={0}
        isDynamic={true} className="arrowContain">
              <div className="arrow"> </div>
            </ScrollLink>

            <div className="introRight"></div>
          </div>

          <div name="About" className="howContain">
            <h1  className="howHeader">How it works</h1>

            <div className="howBox">
              <ScrollAnimation animateIn="fade-in1" className="Step1Contain">
              <img src={Step1} className="IntroImg"/>
              </ScrollAnimation>
                
              <ScrollAnimation animateIn="fade-in2" className="Step2Contain">
                <img src={Step2} className="IntroImg"/>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fade-in3" className="Step3Contain">
                <img src={Step3} className="IntroImg"/>
              </ScrollAnimation>
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

              <div className="abcContain">
                <img src={ABC} className="IntroImg"/>
              </div>
            </div>

            <div className="textImgContain">
              

              <div className="screenContain">
                <img src={Screen} className="IntroImg"/>
              </div>

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
              <ScrollAnimation animateIn="roll-in-right" className="compassContain">
                <img src={Compass} className="IntroImg"/>
              </ScrollAnimation>
            </div>
          </div>


          <div className="howContain">
            <h1 className="howHeader">Plans & Features</h1>
            <h2 className="planHeader">Find a plan that suits you best</h2>

            <ScrollAnimation animateIn="slide-in-fwd-bottom" className="priceContain">
              <img src={Prices} className="IntroImg"/>
            </ScrollAnimation>
              
          </div>

          <div className="trophyContain">
            <div className="trophyImgText">
              <div className="trophyImg">
                <img src={trophy} className="IntroImg"/>
              </div>

              <div className="textButton">

              <h2 className="trophyHeader">Ready to become a memory champion?</h2>

              <Link to="/signUp" className="signButton">
                  <h2 className="tryText">Sign-Up!</h2>
              </Link>

              </div>

            </div>
          </div>



        </div>
      </>
    );
  }
}

export default Intro;
