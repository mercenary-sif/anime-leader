import React from 'react'
import {Navbar } from '../../Components'
import { ADetailes, Footer, P_Article, Rate } from '../../Containers'
const ArticlesDetailes = () => {
  return (
    <div>
      <Navbar detailes={true}/>
      <ADetailes/>
      <Rate/>
      <P_Article/>
      <Footer/>
    </div>
  )
}

export default ArticlesDetailes
