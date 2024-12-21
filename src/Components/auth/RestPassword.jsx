import logo from '../../images/logo--4.png'
import { IoIosLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import './authComponents.css'
import { useState } from 'react';

const RestPassword = () => {
  const [accept, setAccept] = useState(false);
  return (
    <div  className='Leader__sing'>
        <div className="Leader__sing-header">
            <img src={logo} alt="logo" />
            {
                accept ?
                <h1> قم بإعادة تعيين  كلمة السر , تأكد من انها يسهل تذكرها بالنسبة لك ! </h1>
                :
                <h1> قم بادخال بريدك الالكتروني , سيتم ارسال رمز تأكيد بعد التحقق من وجود حسابك ! </h1>
            }
            { accept && <h3>spam قم بإدخال الرمز بشكل الصحيح , في حال تأخر وصوله قم بتفقد ال   </h3>}
            </div>
            <div className="Leader__sing-container">
           {
            accept ?
            <div className="Leader__sing-container__input">
                <input type="password" id="password" name="password" placeholder='  ادخل كلمة السر الجديدة' />
                <IoIosLock  className='Leader__sing-container__input-icons' />
            </div>
            :
            <div className="Leader__sing-container__input">
                <input type="email" id="email" name="email" placeholder='ادخل عنوان بريدك الالكتروني...' />
                <MdAlternateEmail className='Leader__sing-container__input-icons' />
            </div>
          
           }
           <div className="Leader__sing-container_btns">
                {
                    accept ?
                    <button type='button' >
                    تأكيد كلمة السر الجديدة </button>
                    :
                    <button type='button' onClick={() => setAccept(true) } >
                    تأكيد الحساب </button>
                }
           </div>
       
            </div>
      
    </div>
  )
}

export default RestPassword
