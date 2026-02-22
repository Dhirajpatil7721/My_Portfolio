import './App.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Certifications from './Pages/Certifications'
import Contact from './Pages/Contact'
import Getinfo from './API/Getinfo'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Expi from './API/ProjectTable'
import Projectadd from './API/Projectadd'
import ProjectTable from './API/ProjectTable'
import ProjectUpdate from './API/ProjectUpdate'

import ExpiTabe from '../src/API/ExpiTabe'
import ExpiAdd from '../src/API/ExpiAdd'
import ExpiUpdate from '../src/API/ExpiUpdate'

// Wrapper to use hooks outside Router
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/getinfo";

  return (
    <>
      {!hideLayout && <Nav />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/getinfo' element={<Getinfo />} />

        <Route path='/expitable' element={<ExpiTabe />} />
        <Route path='/expiadd' element={<ExpiAdd />} />
        <Route path='/expiupdate' element={<ExpiUpdate />} />



        <Route path='/projecttable' element={<ProjectTable />} />
        <Route path='/projectadd' element={<Projectadd />} />
        <Route path='/projectupdate' element={<ProjectUpdate/>} />


      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default AppWrapper;
