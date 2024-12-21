import logo from '../../images/logo--4.png'
import { FaUserPen  } from "react-icons/fa6";
import './authComponents.css'

const MailConfirmation = () => {
  return (
    <div className='Leader__sing'>
        <div className="Leader__sing-header">
        <img src={logo} alt="logo" />
        <h1> سيصلك رمز تأكيد الحساب الى حساب الايميل الذي قمت بإدخاله  </h1>
        <h3>spam قم بإدخال الرمز بشكل الصحيح , في حال تأخر وصوله قم بتفقد ال   </h3>
        </div>
        <div className="Leader__sing-container">
        <div className="Leader__sing-container__input">
            <input type='number' id="full_name" name="full_name" placeholder=' قم بإدخال الرمز  المكون من 6 أرقام ...' />
            <FaUserPen  className='Leader__sing-container__input-icons' />
        </div>
        <div className="Leader__sing-container_btns">
       
       <button type='button' >
         تأكيد الحساب </button>
       </div>
        </div>
      
    </div>
  )
}

export default MailConfirmation
