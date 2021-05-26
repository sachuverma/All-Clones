import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/" exact>
            <div className="app__page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
