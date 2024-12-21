import logo from '../../images/logo--1.png'
import { FaUser  } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import './authComponents.css'
import { Link, useNavigate } from 'react-router-dom';
const SingIn = () => {
    const navigate  = useNavigate();
    function NavgatTo(){
      navigate(`/`);
  }
  return (
    <div className='Leader__sing'>
        <div className="Leader__sing-header">
          <img src={logo} alt="logo" />
          <h1> أهلا وسهلا بك , منصة القائد ترحب بك </h1>
          <h3> هل ستنضم الينا حديثا فقط ؟  
            <Link className='Leader__sing-header__link'> أنشئ حسابك </Link>
             اولا</h3>
        </div>
        <div className="Leader__sing-container">
        <div className="Leader__sing-container__input">
            <input type="email" id="email" name="email" placeholder='ادخل عنوان بريدك الالكتروني...' />
            <FaUser className='Leader__sing-container__input-icons' />
        </div>
        <div className="Leader__sing-container__input">
            <input type="password" id="password" name="password" placeholder='ادخل كلمة السر' />
            <IoIosLock  className='Leader__sing-container__input-icons' />
        </div>
        <Link to='/restthepassword' className='Leader__sing-container__link'> نسيت كلمة السر ؟ </Link>
        <div className="Leader__sing-container_btns">
       
       <button type='button' onClick={() => NavgatTo()} >
         تسجيل الدخول </button>
       </div>
        </div>
    </div>
  )
}

export default SingIn
