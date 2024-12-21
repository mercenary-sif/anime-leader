import React from 'react'
import './footer.css'
import logo from '../../images/logo 3.png';
const Footer = () => {
  return (
    <div className='Leader__footer section__pedding' id='aboutas'>
       <div className="Leader__footer-links">
        <div className="Leader__footer-links_logo">
            <img src={logo} alt="logo" />
            <p>اول موقع انمي عربي يهتم  بالمحتوى الكتابي المتنوع في العالم العربي</p>
        </div>
      <div className="Leader__footer-links_logo_div">
            <h4>الصفحات</h4>
            <p>الرئيسية</p>
            <p>قائمة المقالات </p>
            <p>قائمة النظريات</p>
            <p>قائمة انطباعات الفصول</p>
            <p>قائمة مراجعات الحلقات</p>
      </div>
        <div className="Leader__footer-links_logo_div">
            <h4>وسائط التواصل </h4>
            <p>Youtube</p>
            <p>Facebook</p>
            <p>Tik Tok</p>
      </div>
     
      </div>

      <div className="Leader__footer-copyright">
        <p>© 2024 Leader Anime codding by The Mercenary Sif Eddine Aguaguena. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
