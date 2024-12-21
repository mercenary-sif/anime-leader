import React from "react"
import {Routes ,  Route,BrowserRouter as  Router } from "react-router-dom"
import { ADetailes, Auth, Home, L_news, NDetailes, Registerition, RestThePassword } from "../Pages"
import ScrollToTop from "../ScrollToTop/ScrollResteration"

 
const Pages = () => {
  return (
    <> 
    <Router>
     <ScrollToTop/>
      <Routes>
        <Route path="/" Component={ Home}/>
        <Route path="/auth" Component={ Auth}/>
        <Route path="/registerition" Component={Registerition }/>
        <Route path="/restthepassword" Component={ RestThePassword}/>
        <Route path="/articledetailes/:id/" Component={ ADetailes}/>
        <Route path="/news-detailes/:id/" Component={ NDetailes}/>
        <Route path="/news-list" Component={ L_news}/>
      </Routes>
      </Router>
      
      
    </>
  )
}

export default Pages
