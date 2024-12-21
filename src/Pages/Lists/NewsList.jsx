import React from 'react'
import {Navbar } from '../../Components'
import { Footer, Newslist } from '../../Containers'
const NewsList = () => {
  return (
    <div>
       <Navbar detailes={true}/>
       <Newslist/>
      <Footer/>
    </div>
  )
}

export default NewsList
