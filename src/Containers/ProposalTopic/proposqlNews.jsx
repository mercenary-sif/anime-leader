import './proposal.css'
import logo from '../../images/logo--1.png'
import { TopNewsdata } from '../News/newsData'
import { Topnews } from '../../Components'
const proposqlNews = () => {
  return (
    <div className='Leader__proposal section__pedding'>
       <div className="Leader__proposal-header">
        <img src={logo} alt="logo" />
        <h1> آخر الأخبار</h1>
        </div>
        <div className="Leader__nwes_proposal-container">
        {
        TopNewsdata.slice(0,8).map((item , i)=> 
          <Topnews key={i} imageUrl={item.Cover} 
        Time={item.Time} Title={item.Title} Writtenby={item.Writtenby} content={item.content}/>) 
          }
        </div>
      
    </div>
  )
}

export default proposqlNews
