import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer'
import AdminCreate from './routes/AdminCreate'
import Attendance from './routes/Attendance'
import About from './routes/About'
// import Home from './routes/Home'
const Home = React.lazy(() => import("./routes/Home"));
import Assignment from './routes/Assignment'
import Notice from "./routes/Notice";
import Quiz from "./routes/Quiz";
import Login from "./routes/Login"
// manan

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
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </>
  );
}

export default App;
