import React from 'react'
import './thoeries.css'
import { Theoriesdata } from './TheoriesData'
import { Latestarticle, Toparticle } from '../../Components'
import logo from '../../images/logo--2.png'
const Theories = () => {
  return (
    <div className="Leader__theories section__pedding " id="theories">
        <div className="Leader__theories-heading">
            <h1> نظريات القائد </h1>
            <img src={logo} alt="logo" />
          </div>
       <div className="Leader__theories-groupA">
          <div className="Leader__theories-groupA__besttheorie">
          {
        Theoriesdata.slice(0,1).map((item , i)=> 
          <Toparticle key={i} imageUrl={item.Cover} Introduction= {item.introduction}
        Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} Type={item.Type}/>) 
          }
          </div>
          <div className="Leader__theories-groupA__latest">
          {
        Theoriesdata.slice(1,3).map((item , i)=> 
          <Toparticle key={i} imageUrl={item.Cover} 
        Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} Type={item.Type}/>) 
          }
          </div>
       </div>
       <div className="Leader__theories-groupB">
       {
             Theoriesdata.slice(3).map((item , i)=> 
                <Latestarticle key={i} imageUrl={item.Cover} Type={item.Type}
             Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} />)
          }
       </div>
    </div>
  )
}

export default Theories
