import './reviews.css'
import { logo , epreviewsLogo , mangareviewsLogo } from './import'
import { EpisodesReviewsdata, MangaReviewsData } from './ReviewsData'
import { Latestarticle, Toparticle } from '../../Components'
const Reviews = () => {
  return (
    <div className="Leader__reviews section__pedding " id="reviews">
    <div className="Leader__reviews-heading">
       <h1> الانطباعات الاسبوعية </h1>
       <img src={logo} alt="logo" />
     </div>
      <div className="Leader__reviews-mangareviews">
      <div className="Leader__reviews-mangareviews__heading">
       <h2>  انطباعات فصول المانجا</h2>
       <img src={mangareviewsLogo} alt="logo" />
       <div />
     </div>
         <div className="Leader__reviews-mangareviews__groupA">
          <div className="Leader__reviews-mangareviews__groupA-bestreview">
              {
            MangaReviewsData.slice(0,1).map((item , i)=> 
              <Toparticle key={i} imageUrl={item.Cover} Introduction= {item.introduction}
            Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} Type={item.Type}
            Anime = {item.Anime} />) 
              }
          </div>
          <div className="Leader__reviews-mangareviews__groupA-topreviews">
              {
            MangaReviewsData.slice(1,5).map((item , i)=> 
              <Toparticle key={i} imageUrl={item.Cover} Introduction= {item.introduction}
            Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} Type={item.Type}
            Anime = {item.Anime}/>) 
              }
          </div>
         </div>
         <div className="Leader__reviews-mangareviews__groupB">
         {
            MangaReviewsData.slice(5,8).map((item , i)=> 
              <Toparticle key={i} imageUrl={item.Cover} Introduction= {item.introduction}
            Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} Type={item.Type}
            Anime = {item.Anime}/>) 
              }
         </div>
      </div>
      <div className="Leader__reviews-episodesreviews">
      <div className="Leader__reviews-episodesreviews__heading">
       <h2>  مراجعات الحلقات الأسبوعية</h2>
       <img src={epreviewsLogo} alt="logo" />
       <div />
     </div>
         <div className="Leader__reviews-episodesreviews__groupA">
           <div className="Leader__reviews-episodesreviews__groupA-bestreview">
           {
            EpisodesReviewsdata.slice(0,1).map((item , i)=> 
              <Toparticle key={i} imageUrl={item.Cover} Introduction= {item.introduction}
            Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} Type={item.Type}
            Anime = {item.Anime} />) 
              }
           </div>
           <div className="Leader__reviews-episodesreviews__groupA-top">
           {
            EpisodesReviewsdata.slice(1,3).map((item , i)=> 
              <Latestarticle key={i} imageUrl={item.Cover} 
            Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} Type={item.Type}
            Anime = {item.Anime}/>) 
              }
          </div>
         </div>
          <div className="Leader__reviews-episodesreviews__groupB">
          {
            EpisodesReviewsdata.slice(3).map((item , i)=> 
              <Latestarticle key={i} imageUrl={item.Cover} Introduction= {item.introduction}
            Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} Type={item.Type}
            Anime = {item.Anime}/>) 
              }
          </div>
      </div>
    </div>
  )
}

export default Reviews
