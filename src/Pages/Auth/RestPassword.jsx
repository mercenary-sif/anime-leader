import React from 'react'
import {Navbar } from '../../Components'
import { Restpassword, Footer } from '../../Containers'
const RestPassword = () => {
  return (
    <div>
        <Navbar auth={true} />
         <Restpassword/>
         <Footer/>
    </div>
  )
}

export default RestPassword
