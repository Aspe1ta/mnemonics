import React from "react";
import "./header.scss";

class Header extends React.Component {

  
  render() {



    return (
      <>
        <div className="header">
          <div className="logoContain">
            <div className="logo">Logo Here</div>
          </div>

          <div className="mainSearch">
            <form onSubmit={this.props.call}>
              <input name={"search"} type="search" placeholder="Search..." />
            </form>
          </div>

        </div>
      </>
    );
  }
}

export default Header;
