import { Latest } from '../../Components'
import './proposal.css'
const Suggestions = ({title , logo , data , n}) => {
  return (
    <div className='Leader__Suggestions'>
      <div className="Leader__Suggestions-header">
         <h1> {title} </h1>
         <img src={logo} alt="logo" />
      </div>
      <div className="Leader__Suggestions-container">
        {
                data.slice(0,n).map((item , i)=> 
                  <Latest key={i} imageUrl={item.Cover} 
                Time={item.Time} Title={item.Title} Writtenby={item.Writtenby} />) 
                  
        }
      </div>
    </div>
  )
}

export default Suggestions
