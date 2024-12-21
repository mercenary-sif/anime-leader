import './newscomponents.css'
const topnews = ({imageUrl , Title ,content, Time , Writtenby}) => {
  return (
    <div className='Leader__topnews'>
         <div className="Leader__topnews-image">
        <img src={imageUrl} alt='Top news pic'/>
      </div>
      <div className="Leader__topnews-content">
        <h3>{Title}</h3>
        <p> {content} </p>
        <div className="Leader__topnews-content-details">
           <p>{Time}</p>
           <p>By : {Writtenby}</p>
        </div>
      </div>
      
    </div>
  )
}

export default topnews
