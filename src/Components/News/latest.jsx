import './newscomponents.css'

const latest = ({imageUrl , Title , Time , content}) => {
  return (
    <div className='Leader__latest'>
       <div className="Leader__latest-image">
        <img src={imageUrl} alt='news pic'/>
      </div>
      <div className="Leader__latest-content">
        <h3>{Title}</h3>
        <p>{content}</p>
        <div className="Leader__latest-content-details">
           <p>{Time}</p>
        </div>
      </div>
    </div>
  )
}

export default latest
