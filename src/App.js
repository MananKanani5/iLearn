import "./App.css";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "./Components/Navbar"
// import Footer from './Components/Footer'
// import AdminCreate from './routes/AdminCreate'
// import Attendance from './routes/Attendance'
// import About from './routes/About'
// import Home from './routes/Home'
// import Assignment from './routes/Assignment'
// import Notice from "./routes/Notice";
// import Quiz from "./routes/Quiz";
// import Login from "./routes/Login"
// import StudentCreate from './routes/StudentCreate';
// import TeacherCreate from './routes/TeacherCreate';
// import AssignmentDetails from './routes/AssignmentDetails';

// lazy loading components, routes import
const Navbar = React.lazy(() => import('./Components/Navbar'));
const Footer = React.lazy(() => import('./Components/Footer'));
const AdminCreate = lazy(() => import('./routes/AdminCreate'));
const Attendance = lazy(()=>import('./routes/Attendance'));
const About = lazy(() => import('./routes/About'));
const Home = lazy(() => import('./routes/Home'));
const Assignment = lazy(() => import('./routes/Assignment'));
const Notice = lazy(() => import('./routes/Notice'));
const Quiz = lazy(() => import('./routes/Quiz'));
const Login = lazy(() => import('./routes/Login'));
const StudentCreate = lazy(() => import('./routes/StudentCreate'));
const TeacherCreate = lazy(() => import('./routes/TeacherCreate'));
const AssignmentDetails = lazy(() => import('./routes/AssignmentDetails'));

function App() {
  return (
    <>
    
      <Router> 
          <Suspense fallback={<div></div>}>
          <Suspense fallback={<div></div>}>
            <Navbar />
          </Suspense>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Assignment' element={<Assignment />} />
          <Route path='/AssignmentDetails' element={<AssignmentDetails />} />
          <Route path='/Attendance' element={<Attendance/>} />
          <Route path="/Notice" element={<Notice  />} />
          <Route path="/Quiz" element={<Quiz  />} />
          <Route path='/AdminCreate' element={<AdminCreate/>} />
          <Route path='/StudentCreate' element={<StudentCreate />} />
          <Route path='/TeacherCreate' element={<TeacherCreate />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        </Suspense>
      </Router>
      <Suspense fallback={<div> </div>}>
      <Footer />
      </Suspense>
    </>
  );
}

export default App;
