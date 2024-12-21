import React from 'react'
import {Navbar } from '../../Components'
import { Register, Footer } from '../../Containers'
const Registerition = () => {
  return (
    <div>
        <Navbar  registerition={true} />
         <Register/>
         <Footer/>
    </div>
  )
}

export default Registerition
