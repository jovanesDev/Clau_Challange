import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DynamicPage from '../pages/DynamicPage'
import Home from '../pages/Home'
import GlobalLayout from './GlobalLayout'


const index = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<GlobalLayout/>}>
              <Route index element={<Home/>}/>
              <Route path=":section" element={<DynamicPage/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default index