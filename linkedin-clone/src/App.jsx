import './App.css'
import ProfileListComponent from './components/ProfileListComponent'
import React from 'react'
import ProfileDetailComponent from './components/ProfileDetailComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<ProfileListComponent />} />
        <Route path="/profile/:id" element={<ProfileDetailComponent />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
