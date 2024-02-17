import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Navbar from './pages/Navbar'
import Contact from './pages/Contact'
// import Skills from './pages/Skills'
import Home from './pages/Home'


const App = () => {
  return <>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        {/* <Route path='/skill-us' element={<Skills />} /> */}
        <Route path='/contact-us' element={<Contact />} />

      </Routes>
    </BrowserRouter>
  </>
}

export default App
 
