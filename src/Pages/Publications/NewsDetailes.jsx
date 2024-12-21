import React from 'react'
import { Navbar } from '../../Components'
import { Footer, NDetaile, P_News } from '../../Containers'

const NewsDetailes = () => {
  return (
    <div>
      <Navbar detailes={true}/>
      <NDetaile/>
      <P_News/>
      <Footer/>
    </div>
  )
}

export default NewsDetailes
