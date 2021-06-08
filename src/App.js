import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from './pages/login-page/login';
import AddSubject from './pages/add-subject/add-subject';
import AddClass from './pages/add-class/add-class';
import AddStudent from './pages/add-student/add-student';
import AddTeacher from './pages/add-teacher/add-teacher';
import AddAssignment from './pages/add-assignment/add-assignment';
import ViewAssignmentList from './pages/view-assignment-list/view-assignment-list';
import ViewAssignment from './pages/view-assignment/view-assignment';
import ViewAdminList from './pages/view-admin-list/view-admin-list';
import ViewAdmin from './pages/view-admin/view-admin';
import ViewParent from './pages/view-parent/view-parent';
import ViewStudentList from './pages/view-student-list/view-student-list';
import ViewStudent from './pages/view-student/view-student';
import ViewTeacher from './pages/view-teacher/view-teacher';
import ViewTeacherList from './pages/view-teacher-list/view-teacher-list';
import Nav from './components/nav/nav';
import SideNav from './components/side-nav/side-nav'
import ViewAssignmentListT from './pages/view-assignment-list-t/view-assignment-list-t';
import ViewClassList from './pages/view-class-list/view-class-list';
import ViewSubjectList from './pages/view-subject-list/view-subjects-list';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <SideNav />
        <Switch>
          <Route exact path="/login">
            <LoginPage />
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
          <Route exact path="/view-assignment-list">
            <ViewAssignmentList />
          </Route>
          <Route exact path="/view-assignment/:id">
            <ViewAssignment />
          </Route>
          <Route exact path="/view-admin-list">
            <ViewAdminList />
          </Route>
          <Route exact path="/view-admin/:id">
            <ViewAdmin />
          </Route>
          <Route exact path="/view-parent/:id">
            <ViewParent />
          </Route>
          <Route exact path="/view-student-list">
            <ViewStudentList />
          </Route>
          <Route exact path="/view-student/:id">
            <ViewStudent />
          </Route>
          <Route exact path="/view-teacher-list">
            <ViewTeacherList />
          </Route>
          <Route exact path="/view-teacher/:id">
            <ViewTeacher />
          </Route>
          <Route exact path="/view-assignment-list-t">
            <ViewAssignmentListT />
          </Route>
          <Route exact path="/view-class-list">
            <ViewClassList />
          </Route>
          <Route exact path="/view-subject-list">
            <ViewSubjectList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;