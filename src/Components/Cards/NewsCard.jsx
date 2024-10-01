import './newscard.css'

const NewsCard = ({imageUrl  , Writtenby , Title , content}) => {
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
        <h1>{Title}</h1>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default NewsCard
