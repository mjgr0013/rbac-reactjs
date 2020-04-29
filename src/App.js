import React from 'react';
import './App.css';
import DashboardPage from "./Components/Dashboard/Dashboard";
import HomePage from "./Components/Home/Home";
import CallbackPage from "./Components/Callback/Callback";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "./Components/Auth/Auth";

function App() {
  return (
      <div className="App container">
        <Auth>
          <div className="jumbotron">
            <Router>
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/dashboard" component={DashboardPage}/>
                <Route path="/callback" component={CallbackPage}/>
              </Switch>
            </Router>
          </div>
        </Auth>
      </div>
  );
}

export default App;
