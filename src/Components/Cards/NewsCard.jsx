import { useNavigate } from 'react-router-dom';
import './newscard.css'

const NewsCard = ({imageUrl  , Writtenby , Title , content}) => {
  const navigate  = useNavigate();
  function NavgatTo(){
    navigate(`/news-detailes/1/`);
}
  return (
    <div className='Leader__newscard'>
        <div className="Leader__newscard-image">
        <img src={imageUrl} alt='news pic'/>
      </div>
      <div className="Leader__newscard-content">
      <div className="Leader__newscard-content-details">
           <p>أخبار عاجلة</p>
           <p>من تقديم : {Writtenby}</p>
        </div>
        <h1  onClick={() => NavgatTo()} >{Title}</h1>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default NewsCard
