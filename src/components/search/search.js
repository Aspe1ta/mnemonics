import React from "react";
import "./search.scss";
import Header from "./../header/header.js";
import SearchTab from "./../info.js";
import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    Data: []
  };

  componentDidMount() {
    this.setState({
      Data: SearchTab
    });
  }

  render() {
    console.log(this.state);

    console.log(this.props);

    return (
      <>
        <Header></Header>

        <div className="searchPage">
          <div className="qContain">
            <h1>{this.props.q}</h1>
          </div>
          <div className="resultContain">
            {this.state.Data.map(info => {
              return (
                <React.Fragment key={info}>
                  <Link to={"/" + info.id} key={info.id} className="searchCard">
                    <div className="cardThumb">
                      <img src={info.img} className="cardImg" />
                    </div>
                    <div className="cardTextContain">
                      <h1>{info.title}</h1>
                    </div>
                    <div className="cardStats"></div>
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
