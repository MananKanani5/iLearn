import "./App.css";
import React, { Suspense, lazy,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Regular Import
import Navbar from './Components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import AdminCreate from './routes/AdminCreate';
import Assignment from './routes/Assignment';
import Notice from './routes/Notice';
import Quizz from './routes/Quiz/Quizz';
import Login from './routes/Login';
import StudentCreate from './routes/StudentCreate';
import TeacherCreate from './routes/TeacherCreate';
import AssignmentDetails from './routes/AssignmentDetails';
import Footer from './Components/Footer';
import LecStruct from "./routes/LecStruct";
import CreateQuiz from "./routes/Quiz/CreateQuiz";
import ForgetPass from "./routes/ForgetPass";
import Logout from "./Components/Logout";
import Gal from "./routes/Gal";
import NoticeCreate from "./routes/NoticeCreate";
import SelectSubject from "./routes/SelectSubject";
import AssignmentStu from "./routes/AssignmentStu";

// lazy loading components, routes import
// const Navbar = React.lazy(() => import('./Components/Navbar'));

function App() {
  const [name, setName] = useState(localStorage.getItem('name'));
  const [status, setStatus] = useState(localStorage.getItem('status'));
const updateName = () => {
  console.log("UpdateName called")
  setName(localStorage.getItem('name'))
}
const updateStatus = () => {
  console.log("UpdateStatus called")
  setStatus(localStorage.getItem('status'))
}
  return (
    <>       
      <Router>
      {/* <Suspense fallback={<div></div>}> */}
      <Navbar name={name} status={status}/>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Gallery' element={<Gal />} />
          <Route path='/Assignment' element={<Assignment />} exact />
          <Route path='/AssignmentDetails' element={<AssignmentDetails />} />
          <Route path="/Notice" element={<Notice  />} />
          <Route path="/NoticeCreate" element={<NoticeCreate />} />
          <Route path="/Quizz" element={<Quizz />} />
          <Route path="/SelectSubject" element={<SelectSubject />} />
          <Route path="/AssignmentStu" element={<AssignmentStu />} />
          <Route path="/CreateQuiz" element={<CreateQuiz />} />
          <Route path="/LecStruct" element={<LecStruct />} />
          <Route path='/AdminCreate' element={<AdminCreate/>} />
          <Route path='/StudentCreate' element={<StudentCreate />} />
          <Route path='/TeacherCreate' element={<TeacherCreate />} />
          <Route path="/Login" element={<Login updateName={updateName} updateStatus={updateStatus}/>} />
          <Route path="/ForgetPass" element={<ForgetPass /> } />
          <Route path="/Logout" element={<Logout updateName={updateName} updateStatus={updateStatus}/>} />

        </Routes>
        {/* </Suspense> */}
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
