import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer'
import AdminCreate from './routes/AdminCreate'
import Attendance from './routes/Attendance'
import About from './routes/About'
import Home from './routes/Home'
import Assignment from './routes/Assignment'
import Notice from "./routes/Notice";
import Quiz from "./routes/Quiz";
import Login from "./routes/Login"
import StudentCreate from './routes/StudentCreate';

// lazzy loading components import

// const Navbar = lazy(()=>import('./Components/Navbar'))
// const Footer = lazy(()=>import('./Components/Footer'))
// const AdminCreate = lazy(()=>import('./routes/AdminCreate'))
// const Attendance = lazy(()=>import('./routes/Attendance'))
// const About = lazy(()=>import('./routes/About'))
// const Home = lazy(()=>import('./routes/Home'))
// const Assignment = lazy(()=>import('./routes/Assignment'))
// const Notice = lazy(()=>import('./routes/Notice'))
// const Quiz = lazy(()=>import('./routes/Quiz'))
// const Login = lazy(()=>import('./routes/Login'))

function App() {
  return (
    <>
      <BrowserRouter>   
      <Navbar />  
        <Routes>   
          <Route path='/'  element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Assignment' element={<Assignment />} />
          <Route path='/Attendance' element={<Attendance/>} />
          <Route path="/Notice" element={<Notice  />} />
          <Route path="/Quiz" element={<Quiz  />} />
          <Route path='/AdminCreate' element={<AdminCreate/>} />
          <Route path='/StudentCreate' element={<StudentCreate />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    
      <Footer />
    </>
  );
}

export default App;
