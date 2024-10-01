import React from "react"
import {Routes ,  Route,BrowserRouter as  Router } from "react-router-dom"
import { Home } from "../Pages"
import ScrollToTop from "../ScrollToTop/ScrollResteration"

 
const Pages = () => {
  return (
    <>
    <Router>
     <ScrollToTop/>
      <Routes>
        <Route path="/" Component={ Home}/>

      
  
      </Routes>
      </Router>
      
      
    </>
  )
}

export default Pages
