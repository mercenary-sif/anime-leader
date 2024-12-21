import { Toparticle } from '../../Components'
import LatestArticle from '../../Components/Article/LatestArticle'
import './articles.css'
import { TopArticlesdata , PopularArticlesdata } from './ArticlesData'
import logo from '../../images/logo--1.png'
const Articles = () => {
  return (
    <div className="Leader__articles section__pedding " id="articles">
         <div className="Leader__articles-heading">
            <h1> مقالات متنوعة </h1>
            <img src={logo} alt="logo" />
          </div>
        <div className="Leader__articles-toparticles">
            <div className="Leader__articles-toparticles__bestarticle">
            {
        TopArticlesdata.slice(0,1).map((item , i)=> 
          <Toparticle key={i} imageUrl={item.Cover} Introduction= {item.introduction}
        Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} Type={'best'}/>) 
          }
            </div>
            <div className="Leader__articles-toparticles__top">
            {
        TopArticlesdata.slice(1,3).map((item , i)=> 
          <Toparticle key={i} imageUrl={item.Cover} Type={'top'}
        Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} />) 
          }
            </div>
        </div>
        <div className="Leader__articles-popular">
          {
             PopularArticlesdata.map((item , i)=> 
                <LatestArticle key={i} imageUrl={item.Cover} Type={'popular'}
             Date={item.Date} Title={item.Title} Writtenby={item.Writtenby} />)
          }
        </div>
    </div>
  )
}

export default Articles
