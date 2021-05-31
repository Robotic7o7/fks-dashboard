import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from './pages/login-page/login';
import AddSubject from './pages/add-subject/add-subject';
import AddClass from './pages/add-class/add-class';
import AddStudent from './pages/add-student/add-student';
import AddTeacher from './pages/add-teacher/add-teacher';
import AddAssignment from './pages/add-assignment/add-assignment';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login">
           <LoginPage/>
          </Route>
          <Route exact path="/add-subject">
           <AddSubject />
          </Route>
          <Route exact path="/add-class">
           <AddClass />
          </Route>
          <Route exact path="/add-student">
            <AddStudent />
          </Route>
          <Route exact path="/add-teacher">
            <AddTeacher />
          </Route>
          <Route exact path="/add-assignment">
            <AddAssignment />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;