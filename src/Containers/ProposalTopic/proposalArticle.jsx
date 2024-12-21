import './proposal.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../../images/logo--1.png'
import {  MangaReviewsData } from '../Reviews/ReviewsData'
import { Toparticle } from '../../Components'
import next from '../../images/Red Right-arrow.png'
import prev from '../../images/Red Left arrow.png'
const proposalArticle = () => {
    const SamplePrevArrow = (props) => {
        const { className,  onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`}>
            <img src={prev} alt="prev" />
          </div>
        )
        }
    
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
            <img src={next} alt="next" />
           
            
          </div>
        )
      }
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className : "Proposal-slide",
        autoplay: true,
        speed: 250,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow to="next"/>,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
          {
            breakpoint: 1024,  
            settings: {
              slidesToShow: 4,
             
            }
          },
          {
            breakpoint: 950,  
            settings: {
              slidesToShow: 3,
             
            }
          },
          {
            breakpoint: 650,  
            settings: {
              slidesToShow: 2,
             
            }
          }
         
        ]
      
      };
  return (
    <div className='Leader__proposal section__pedding'>
      <div className="Leader__proposal-header">
        <img src={logo} alt="logo" />
        <h1> مواضيع رائجة </h1>
      </div>
      <div className="Leader__proposal-container">
      <Slider {...settings}>
      {
        MangaReviewsData.map((item , i)=> 
          <Toparticle key={i} imageUrl={item.Cover} Type={item.Type}
        Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} />) 
          }
      </Slider>
      </div>
    </div>
  )
}

export default proposalArticle
