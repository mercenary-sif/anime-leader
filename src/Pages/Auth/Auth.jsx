import React from 'react'
import {Navbar } from '../../Components'
import { Authentification, Footer } from '../../Containers'

const Auth = () => {
  return (
    <div>
      <Navbar auth={true} />
      <Authentification/>
      <Footer/>
    </div>
  )
}

export default Auth
