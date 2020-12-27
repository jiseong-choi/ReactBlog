import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LadingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'
import NavBar from './components/views/NavBar/NavBar'
import WritingPage from './components/views/WritingPage/WritingPage';
import { useSelector } from 'react-redux'; 

function App() {
  
  return (
    <Router>
      <div>
        <NavBar />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Auth(LandingPage,null)} />
          <Route exact path="/login" component={Auth(LoginPage,false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/writing" component={Auth(WritingPage,true)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
