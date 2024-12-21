import './news.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BreakingNewsdata , TopNewsdata , Trendsdata ,LatestNewsdata , Adventismentdata } from './newsData'
import { Latest, Newscard, Topnews } from '../../Components';
const News = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className : "slide",
    autoplay: true,
    speed: 250,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div className="Leader__news section__pedding" id="news">
      <div className="Leader__news-GroupA">
         <div className="Leader__news-GroupA-topnews">
         {
        TopNewsdata.slice(0,2).map((item , i)=> 
          <Topnews key={i} imageUrl={item.Cover} 
        Time={item.Time} Title={item.Title} Writtenby={item.Writtenby} />) 
          }
         </div>
         <div className='Leader__news-GroupA-separe'/>
         <div className="Leader__news-GroupA-breakingnews">
        <Slider {...settings}>
        {
        BreakingNewsdata.map((item , i)=> 
          <Newscard key={i} imageUrl={item.Cover} content={item.content}
        Time={item.Time} Title={item.Title} Writtenby={item.Writtenby} />) 
          }
        </Slider>
         </div>
         <div className='Leader__news-GroupA-separe'/>
         <div className="Leader__news-GroupA-trends">
          <div className="Leader__news-GroupA-trends-header">
            <div />
            <h1> المتداول </h1>
          </div>
         {
        Trendsdata.map((item , i)=> 
          <Latest key={i} imageUrl={item.Cover} 
        Time={item.Time} Title={item.Title} Writtenby={item.Writtenby} />) 
          }
         </div>
      </div>
      <div className='Leader__news-separ'/>
      <div className="Leader__news-GroupB">
        <div className="Leader__news-GroupB-topnews">
        {
        TopNewsdata.slice(2,3).map((item , i)=> 
          <Latest key={i} imageUrl={item.Cover} 
        Time={item.Time} Title={item.Title} Writtenby={item.Writtenby} content={item.content}/>) 
          }
        </div>
        <div className="Leader__news-GroupB-latest">
        {
        LatestNewsdata.map((item , i)=> 
          <Latest key={i} imageUrl={item.Cover} 
        Time={item.Time} Title={item.Title} Writtenby={item.Writtenby} />) 
          }
        </div>
      </div>
      <div className='Leader__news-separ'/>
      <div className="Leader__news-GroupC">
          <div className="Leader__news-GroupC-heading">
            <h1>اعلانات القائد </h1>
          </div>
          <div className="Leader__news-GroupC-container">
          {
        Adventismentdata.map((item , i)=> 
          <Topnews key={i} imageUrl={item.Cover} 
        Time={item.Time} Title={item.Title} Writtenby={item.Writtenby} content={item.content}/>) 
          }
          </div>
      </div>
    </div>
  )
}

export default News
