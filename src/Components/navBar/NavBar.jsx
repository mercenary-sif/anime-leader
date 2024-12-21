import './navbar.css'
import React, { useState } from 'react'
import logo from '../../images/logo 3.png'
import { RiMenu3Line , RiCloseLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { RiBookmarkFill  } from 'react-icons/ri'
import { FaUserCircle } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
const HomeMenu = () => {
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
const Menu = () => {
    return(
     <>
       <p><a href='/'>الرئيسية</a></p>
       <p><a href='#news'> قائمة الأخبار</a></p>
       <p><a href='#articles'> قائمة المقالات</a></p>
       <p><a href='#theories'> قائمة النظريات</a></p>
       <p><a href='#reviews'> قائمة الانطباعات</a></p>
       <p><a href='#aboutas'>معلومات عنا</a></p>
    
    </>)
   };   
const AuthMenu = () => {
    return(
     <>
       <p><a href='/'>الرئيسية</a></p>
       <p><a href='#aboutas'>معلومات عنا</a></p>
    
    </>)
   };
const MenuIcons = () => {
    return(
     <>
    <FaUserCircle className='Leader__navbar-menu_container-links_sing-icons'/> 
    <RiBookmarkFill className='Leader__navbar-menu_container-links_sing-icons'/>
    <MdFavorite className='Leader__navbar-menu_container-links_sing-icons'/>
    </>)
   };   
const NavBar = ({auth , registerition , detailes}) => {
    const [menu , setMenu]= useState(false);
    const navigate  = useNavigate();
    function NavgatTo(type){
      if(type==='singin'){navigate(`/auth`);}
      else{navigate(`/registerition`);}
  }
  // BEM --> Block Element Modifier
  return (
    <div className='Leader__navbar'>
       <div className="Leader__navbar-links">
          <div className="Leader__navbar-links_logo">
            <img src={logo} alt='logo' />
          </div>
          <div className="Leader__navbar-links_container">
          {auth || registerition ? <AuthMenu/> : detailes ? <Menu/> : <HomeMenu/>}
          </div>
          </div>
          <div className='Leader__navbar-sing'>
          {  detailes ?
                 <>
                 <MenuIcons/>
                 </>
                 : 
                 <>
                 { auth  ?
                <>
                <button  type='button' onClick={()=> NavgatTo()}>انشاء حساب جديد</button>
                </>:
                <>
                {
                  registerition ?
                  <>
                  <p onClick={()=> NavgatTo('singin')}  >تسجيل الدخول</p>
                  </>
                  :
                  <>
                  <p onClick={()=> NavgatTo('singin')}  >تسجيل الدخول</p>
                  <button  type='button'onClick={()=> NavgatTo('singup')}>انشاء حساب جديد</button>
                  </>
                }
                
                </>}
            </>}
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
                {auth || registerition ? <AuthMenu/> : detailes ? <Menu/> :  <HomeMenu/>}
                </div>
                <div className='Leader__navbar-menu_container-links_sing'>
                 { detailes ?
                 <>
                  <MenuIcons/>
                 </>
                 : 
                 <>
                 { auth ?
                    <>
                    <button  type='button'>انشاء حساب جديد</button>
                    </>:
                    <>
                    {
                      registerition ?
                      <>
                      <p onClick={()=> NavgatTo('singin')}  >تسجيل الدخول</p>
                      </>
                      :
                      <>
                      <p onClick={()=> NavgatTo('singin')}  >تسجيل الدخول</p>
                      <button  type='button'onClick={()=> NavgatTo('singup')}>انشاء حساب جديد</button>
                      </>
                    }
                    </> }
                    </>
                    }
                </div>
              </div>
              
            }
          </div>
       
    </div>
  )
}

export default NavBar
