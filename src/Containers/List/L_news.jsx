import './list.css'
import { TopNewsdata , BreakingNewsdata , Trendsdata , LatestNewsdata , Adventismentdata } from '../News/newsData'
import { Topnews } from '../../Components'
import { useState } from 'react'
const L_news = () => {
    const [news , setNews]=useState(TopNewsdata)
    function FilterNews(Type){
         if (Type === 'breaking'){
            setNews(BreakingNewsdata);
         } else if(Type === 'trend'){
            setNews(Trendsdata);
         } else if(Type === 'top'){
            setNews(TopNewsdata);
         } else if(Type === 'latest'){
            setNews(LatestNewsdata);
         } else if(Type === 'adventisment'){
            setNews(Adventismentdata);
         } 
    }
  return (
    <div className='Leader__list section__pedding' >
      <div className="Leader__news_list-header">
    
        <div className="Leader__news_list-header_list">
            <h3 onClick={()=> FilterNews()} > كل الأخبار </h3>
            <h3 onClick={()=> FilterNews('breaking')} > عاجل  </h3>
            <h3 onClick={()=> FilterNews('trend')} > المتداول </h3>
            <h3 onClick={()=> FilterNews('top')} > أفضل الأخبار </h3>
            <h3 onClick={()=> FilterNews('latest')} > تحديثات الأخبار </h3>
            <h3 onClick={()=> FilterNews('adventisment')} > اعلانات القائد </h3>
        </div>
        <div className='Leader_divider' />
        <div className="Leader__news_list-container">
        {
         news.map((item , i)=> 
          <Topnews key={i} imageUrl={item.Cover} 
        Time={item.Time} Title={item.Title} Writtenby={item.Writtenby} content={item.content}/>) 
          }
        </div>
      </div>
    </div>
  )
}

export default L_news
