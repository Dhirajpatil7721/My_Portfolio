
// import './App.css'
// import Nav from './Components/Nav'
// import Footer from './Components/Footer'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Skills from './Pages/Skills'
// import Projects from './Pages/Projects';
// import Experience from './Pages/Experience';
// import Certifications from './Pages/Certifications';
// import Contact from './Pages/Contact';
// import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
// import Getinfo from './Components/Getinfo'

// function App() {

//   return (
//   //   <div>

//   // <Nav/>
//   // <Home/>
//   //   </div>

// <Router>
//   <Nav/>
// <Routes>
//   <Route path='/' element={<Home/>}/>
//   <Route path='/about' element={<About/>}/>
//   <Route path='/skills' element={<Skills/>}/>
//   <Route path='/projects' element={<Projects/>}/>
//   <Route path='/experience' element={<Experience/>}/>
//   <Route path='/certifications' element={<Certifications/>}/>
//   <Route path='/contact' element={<Contact/>}/>
//   <Route path='/getinfo' element={<Getinfo/>}/>
// </Routes>
// <Footer/>
// </Router>

//   )
// }

// export default App


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
import Getinfo from './Components/Getinfo'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

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
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default AppWrapper;
