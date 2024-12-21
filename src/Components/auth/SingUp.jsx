import logo from '../../images/logo--4.png'
import {  FaUserEdit , FaUserSecret  } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import './authComponents.css'

const SingUp = ({send}) => {
    
  return (
    <div className='Leader__sing'>
       <div className="Leader__sing-header">
          <img src={logo} alt="logo" />
          <h1>  من دواعي السرور انضمامك لنا كأحد أفراد مجتمع القائد</h1>
          <h3>  قم بإدخال المعلومات الأساسية بشكل المطلوب لإنشاء حسابك </h3>
        </div>
        <div className="Leader__sing-container">
        <div className="Leader__sing-container__input">
            <input type="text" id="full_name" name="full_name" placeholder=' قم بإدخال اسمك الكامل...' />
            <FaUserEdit className='Leader__sing-container__input-icons' />
        </div>
        <div className="Leader__sing-container__input">
            <input type="text" id="user_name" name="user_name" placeholder=' قم بإدخال اسم المستخدم...' />
            <FaUserSecret  className='Leader__sing-container__input-icons' />
        </div>
        <div className="Leader__sing-container__input">
            <input type="email" id="email" name="email" placeholder='ادخل عنوان بريدك الالكتروني...' />
            <MdAlternateEmail className='Leader__sing-container__input-icons' />
        </div>
        <div className="Leader__sing-container__input">
            <input type="password" id="password" name="password" placeholder='ادخل كلمة السر' />
            <IoIosLock  className='Leader__sing-container__input-icons' />
        </div>
        <div className="Leader__sing-container_btns">
       <button type='button' onClick={send} >
        ارسال المعلومات </button>
       </div>
        </div>
    </div>
  )
}

export default SingUp
