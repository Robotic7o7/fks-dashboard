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
import GenderRatioPie from './components/gender-ratio-pie/gender-ratio-pie';
import ParentProfessionsPie from './components/parent-professions-pie/parent-professions-pie';
import BirthdayCalendar from './components/birthday-calendar/birthday-calendar';
import StudentResidenceMap from './components/student-residence-map/student-residence-map';
import AddBranch from './pages/add-branch/add-branch';
import ViewBranchList from './pages/view-branch-list/view-branch-list';
import News from './pages/news/news';
import AddNews from './pages/add-news/add-news';
import ViewPerformance from './pages/view-performance/view-performance';
import ViewSubject from './pages/view-subject/view-subject';
import ViewBranch from './view-branch/view-branch';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/home">
          <Nav />
          <SideNav />
          </Route>
          <Route exact path="/add-subject">
          <Nav />
          <SideNav />
          <AddSubject />
          </Route>
          <Route exact path="/add-class">
          <Nav />
          <SideNav />
          <AddClass />
          </Route>
          <Route exact path="/add-student">
          <Nav />
          <SideNav />
          <AddStudent />
          </Route>
          <Route exact path="/add-teacher">
            <Nav />
            <SideNav />
            <AddTeacher />
          </Route>
          <Route exact path="/add-assignment">
            <Nav />
            <SideNav />
            <AddAssignment />
          </Route>
          <Route exact path="/view-assignment-list">
            <Nav />
            <SideNav />
            <ViewAssignmentList />
          </Route>
          <Route exact path="/view-assignment/:id">
            <Nav />
            <SideNav />
            <ViewAssignment />
          </Route>
          <Route exact path="/view-admin-list">
            <Nav />
            <SideNav />
            <ViewAdminList />
          </Route>
          <Route exact path="/view-admin/:id">
            <Nav />
            <SideNav />
            <ViewAdmin />
          </Route>
          <Route exact path="/view-parent/:id">
            <Nav />
            <SideNav />
            <ViewParent />
          </Route>
          <Route exact path="/view-student-list">
            <Nav />
            <SideNav />
            <ViewStudentList />
          </Route>
          <Route exact path="/view-student/:id">
            <Nav />
            <SideNav />
            <ViewStudent />
          </Route>
          <Route exact path="/view-teacher-list">
            <Nav />
            <SideNav />
            <ViewTeacherList />
          </Route>
          <Route exact path="/view-teacher/:id">
            <Nav />
            <SideNav />
            <ViewTeacher />
          </Route>
          <Route exact path="/view-assignment-list-t">
            <Nav />
            <SideNav />
            <ViewAssignmentListT />
          </Route>
          <Route exact path="/view-class-list">
            <Nav />
            <SideNav />
            <ViewClassList />
          </Route>
          <Route exact path="/view-subject/:id">
            <Nav />
            <SideNav />
            <ViewSubject/>
          </Route>
          <Route exact path="/view-subject-list">
            <Nav />
            <SideNav />
            <ViewSubjectList />
          </Route>
          <Route exact path="/gender-ratio-pie">
           <Nav />
            <SideNav />
            <GenderRatioPie />
          </Route>
          <Route exact path="/parent-professions-pie">
            <Nav />
            <SideNav />
            <ParentProfessionsPie />
          </Route>
          <Route exact path="/birthday-calendar">
            <Nav />
            <SideNav />
            <BirthdayCalendar />
          </Route>
          <Route exact path="/student-residence-map">
            <Nav />
            <SideNav />
            <StudentResidenceMap />
          </Route>
          <Route exact path="/add-branch">
            <Nav />
            <SideNav />
            <AddBranch />
          </Route>
          <Route exact path="/view-branch/:id">
            <Nav />
            <SideNav />
            <ViewBranch/>
          </Route>
          <Route exact path="/view-branch-list">
            <Nav />
            <SideNav />
            <ViewBranchList />
          </Route>
          <Route exact path="/news">
            <Nav />
            <SideNav />
            <News />
          </Route>
          <Route exact path="/add-news">
            <Nav />
            <SideNav />
            <AddNews />
          </Route>
          <Route exact path="/view-performance">
            <Nav />
            <SideNav />
            <ViewPerformance />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;