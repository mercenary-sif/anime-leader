import { Articledetailes } from '../../Components'
import './detailes.css'
import { article } from './Data'
const D_Article = () => {
  return (
    <div className='Leader__A_detailes section__pedding'> 
      <Articledetailes 
      Title = {article.title}
      anime ={article.anime}
       date = {article.date} 
        time = {article.time} 
         type = {article.type}
          cover = {article.cover} 
           username ={article.username}
            acc_pic ={article.acc_pic} 
             introduction = {article.introduction}
              content = {article.content} 
               conclusion = {article.conclusion} />      
    </div>
  )
}

export default D_Article
