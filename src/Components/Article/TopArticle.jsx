import React, { useState } from 'react'
import './articlesComponents.css'
import { RiBookmarkFill , RiBookmarkLine } from 'react-icons/ri'
const TopArticle = ({imageUrl , Title , Introduction , Date , Writtenby , Type , Anime}) => {
  const [isMarked , setMarked] = useState(false)
  return (
    <div className='Leader__toparticle'>
       <div className="Leader__toparticle-image">
        <img src={imageUrl} alt='Top news pic'/>
      </div>
      <div className="Leader__toparticle-content">
      <div class="Leader__toptarticle-content_label"
      style={{
        backgroundColor : 
          Type === 'best' ? `#ee0985` : Type === 'top' ? `#00bed4`: `#ff5733` 
        
      }}
      >
        {
          Type === 'best' ? 'أفضل مقال' : Type === 'top' ? 'ممتاز': 'رائج'  
        }
      </div>
        <h3>{Title}</h3>
        <p> {Introduction} </p>
        
        {Anime && <p>اسم العمل : {Anime}</p>}
        <div className="Leader__toparticle-content-details">
          <div className="Leader__toparticle-content-details_content">
            <p>{Date}</p>
            <p>By : {Writtenby}</p>
          </div>
          <div className="Leader__toparticle-content-details_icons">
          {
              isMarked ?
              <RiBookmarkFill size={25} color={` var(--color-blog)`}  onClick={()=> setMarked((M)=> !M)}/>
              :
              <RiBookmarkLine size={25} color='#fff' onClick={()=> setMarked((M)=> !M)}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopArticle
