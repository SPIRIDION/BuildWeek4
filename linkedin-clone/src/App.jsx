import './App.css'
import CustomNav from './components/CustomNav'
import Footer from './components/Footer'
import ProfileListComponent from './components/ProfileListComponent'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProfileDetailComponent from './components/ProfileDetailComponent'
import HomePageComponent from './components/HomePageComponent'





function App() {

  return (
    <>

      <CustomNav />
      <Router>
        <Routes>
          <Route path="/" element={<ProfileListComponent />} />
          <Route path="/profile/:id" element={<ProfileDetailComponent />} />
          
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default App
