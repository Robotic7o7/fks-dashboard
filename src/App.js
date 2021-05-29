import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from './pages/login-page/login';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
           <LoginPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
