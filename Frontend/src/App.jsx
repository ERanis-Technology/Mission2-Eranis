import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Services_Projets from './Pages/Services_Projets.jsx'
import Missions from './Pages/Missions.jsx'
import Blog from './Pages/Blog.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom" 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Services_Projets/>}/>
        <Route path="/services" element={<Services_Projets/>}/>
        <Route path="/missions" element={<Missions/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
