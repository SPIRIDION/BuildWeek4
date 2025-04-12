import './App.css'
import CustomNav from './components/CustomNav'
import Footer from './components/Footer'
import ProfileListComponent from './components/ProfileListComponent'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProfileDetailComponent from './components/ProfileDetailComponent'
import HomePageComponent from './components/HomePageComponent'
import MyProfileComponent from './components/MyProfileComponent'





function App() {

  return (
    <>

      
      <Router>
        <CustomNav />
        <Routes>
          
          <Route path="/" element={<ProfileListComponent />} />
          <Route path="/profile/:id" element={<ProfileDetailComponent />} />
          <Route path="/tu" element={<MyProfileComponent />} />
          <Route path="/home" element={<HomePageComponent/>} />
          
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default App
