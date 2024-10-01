import './navbar.css'
import React, { useState } from 'react'
import logo from '../../images/logo 3.png'
import { RiMenu3Line , RiCloseLine } from 'react-icons/ri'
const Menu = () => {
    return(
     <>
       <p><a href='#home'>الرئيسية</a></p>
       <p><a href='#news'>الأخبار</a></p>
       <p><a href='#articles'>المقالات</a></p>
       <p><a href='#theories'>النظريات</a></p>
       <p><a href='#reviews'>الانطباعات</a></p>
       <p><a href='#aboutas'>معلومات عنا</a></p>
    
    </>)
   };

const NavBar = () => {
    const [menu , setMenu]= useState(false)
  // BEM --> Block Element Modifier
  return (
    <div className='Leader__navbar'>
       <div className="Leader__navbar-links">
          <div className="Leader__navbar-links_logo">
            <img src={logo} alt='logo' />
          </div>
          <div className="Leader__navbar-links_container">
          <Menu/>
          </div>
          </div>
          <div className='Leader__navbar-sing'>
            <p>تسجيل الدخول</p>
            <button type='button'>انشاء حساب جديد</button>
          </div>
          <div className='Leader__navbar-menu'>
            {
              menu ?
              <RiCloseLine size={25} color='#fff' onClick={()=> setMenu((M)=> !M)}/>
              :
              <RiMenu3Line size={25} color='#fff' onClick={()=> setMenu((M)=> !M)}/>
            }
            {
              menu &&
              <div className='Leader__navbar-menu_container scale-up-center'>
                <div className='Leader__navbar-menu_container-links'>
               <Menu/>
                </div>
                <div className='Leader__navbar-menu_container-links_sing'>
                  <p>تسجيل الدخول</p>
                  <button type='button'>انشاء حساب جديد</button>
                </div>
              </div>
              
            }
          </div>
       
    </div>
  )
}

export default NavBar
