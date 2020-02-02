import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/landing/landing.js";
import Search from "./components/search/search.js";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/"} exact component={Landing}/>
          <Route path={"/search"} component={Search}/>
        </Switch>
      </Router>
      
      
      
    );
  }
}

export default App;
