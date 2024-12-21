import Tools from '../Tools/Tools'
import './detaile.css'

const Detailes = ({Title , date , time ,anime, type , cover , username , acc_pic , introduction , content , conclusion  }) => {
  return (
    <div className='Leader__detailes'>
       <div className="Leader__detailes-hearder">
        <h3> {type} </h3>
        <h1> {Title} </h1>
        <div className="Leader__A_detailes-hearder__detailes">
            <div className="Leader__A_detailes-hearder__detailes-acc">
            <img src={acc_pic} alt="acc pic" />
            <h3> {username} </h3>
            </div>
            <h3> نشر يوم : {date} على : {time} </h3>
            <h3> أنمي : {anime}</h3>
        </div>
        <Tools/>
        <div className="Leader__detailes-cover">
            <img src={cover} alt="cover" />
        </div>
        <div className="Leader__detailes-container">
                <p> {introduction} </p>
                <p> {content} </p>
                <p> {conclusion} </p>
    
        </div>
       </div>
    </div>
  )
}

export default Detailes
