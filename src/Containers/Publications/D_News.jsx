import { NewsDetaile } from '../../Components'
import { Adventismentdata, Trendsdata } from '../News/newsData'
import Suggestions from '../ProposalTopic/Suggestions'
import { news } from './Data'
import logo from '../../images/logo--1.png'
import logo2 from '../../images/logo--4.png'
import './detailes.css'
const D_News = () => {
  return (
    <div className='Leader__news_detailes section__pedding'>
      <div className="Leader__news_detailes-container">
      <NewsDetaile 
      Title = {news.title}
       date = {news.date} 
        time = {news.time} 
         type = {news.type}
          cover = {news.cover} 
           username ={news.username}
            acc_pic ={news.acc_pic} 
             Source = {news.Source}
              content = {news.content}  /> 
      </div>
              <div className="Leader__news_detailes-divider"/>
               
         <div className="Leader__news_detailes-Suggestions">
             <Suggestions 
             title = {'المتداول'} 
             logo = {logo} 
             data = {Trendsdata} 
             n = {3}
             />
             <div className="Leader__news_detailes-Suggestions_divider"/>
             <Suggestions 
             title = {'الاعلانات'} 
             logo = {logo2} 
             data = {Adventismentdata} 
             n = {4}
             />
          </div>       
    </div>
  )
}

export default D_News
