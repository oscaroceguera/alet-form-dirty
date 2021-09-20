import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import Catalogs from "./pages/catalogs";
import Dashboard from "./pages/dashboard";
import Stuffs from "./pages/stuffs";
import Users from "./pages/users";

const inlStyles = {
  display: "flex",
  fontSize: "24px",
  background: "#2d3436",
  color: "#dfe6e9",
  padding: "12px",
  margin: "0",
  justifyContent: "space-between",
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ul style={inlStyles}>
            <li>
              <Link style={{ color: "white" }} to="/">
                Dashboard
              </Link>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/catalogs">
                Catalogs
              </Link>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/stuffs">
                Stuffs
              </Link>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/users">
                Users
              </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/catalogs">
              <Catalogs />
            </Route>
            <Route path="/stuffs">
              <Stuffs />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
