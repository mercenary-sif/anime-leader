import React from 'react'
import './homecard.css'
import read from '../../images/Readnow.png'
const HomeCard = ({imageUrl , Episode , anime , Introduction , Title , Publication}) => {
  return (
    <div className='Leader__card'>
      <div className="Leader__card-pic">
        <img src={imageUrl} alt='cover'/>
      </div>
      <div className="Leader__card-container">
        <h1 className='Gradient__text'> {anime} </h1>
        <h2> {Title}</h2>
        <p>{Introduction}</p>
        <h3> {Publication==='Article' && 'مقالة'}
        {Publication==='News' && 'خبر'}
        {Publication==='Review ep' && 'مراجعة الحلقة الأسبوعية'}
        {Publication==='Review ch' && 'انطباع الفصل الأسبوعي'}
        </h3>
        <div className="Leader__card-container_btns">
       
       <button type='button'>
         <img src={read} alt="read" />
         قراءة </button>
       </div>
      </div>
     
    </div>
  )
}

export default HomeCard
