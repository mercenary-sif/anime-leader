import { useState } from 'react'
import './tools.css'
import { MdFavoriteBorder , MdFavorite } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
const Tools = () => {
  const [isInReadLater , setReadLater]= useState();
  const [isFavorie , setFavorie]= useState();
  return (
    <div  className='Leader__tools'>
       <div className="Leader__tools-container">
        <div className="Leader__tools-container-detailes">
        <FaFireAlt color={'#df4024'} className='Leader__tools-container__icons' />
        <h4> حرق للأنمي  </h4>
        </div>
       <div className="Leader__tools-container-detailes">
       <FaRegEye color={'#eee4e0'} className='Leader__tools-container__icons' /> 
       <h4> 1203 </h4>
       </div>
      
        {isFavorie ? <MdFavorite className='Leader__tools-container__icons' onClick={()=>  setFavorie((F)=>!F) }  color = {`red`} /> : 
          <MdFavoriteBorder  className='Leader__tools-container__icons'  onClick={()=>  setFavorie((F)=>!F) } /> }
        {isInReadLater ? <FaBookmark className='Leader__tools-container__icons'  onClick={()=>  setReadLater((R)=>!R) } color = {`var(--color-blog)`}/>
        : <CiBookmarkPlus className='Leader__tools-container__icons' onClick={()=>  setReadLater((R)=>!R) }/>}
        <MdDelete className='Leader__tools-container__icons'/>
        <IoSettingsSharp className='Leader__tools-container__icons'/>
       </div>
    </div>
  )
}

export default Tools
