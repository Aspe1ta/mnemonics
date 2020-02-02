import React from "react";
import "./search.scss";
import Header from "./../header/header.js";
import SearchTab from "./../info.js";

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

    return (
      <>
        <Header></Header>

        <div className="searchPage">
          <div className="resultContain">
            {this.state.Data.map(info => {
              return (
                <React.Fragment key={info}>
                  <div className="searchCard">
                    <div className="cardThumb">
                        <img src={info.img} className="cardImg"/>
                    </div>
                    <div className="cardTextContain">
                      <h1>{info.title}</h1>
                    </div>
                    <div className="cardStats"></div>
                  </div>
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
