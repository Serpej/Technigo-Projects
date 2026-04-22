import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Welcome } from './components/Welcome'
import { Contact } from './components/Contact'
import { About } from './components/About'


function App() {


  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
