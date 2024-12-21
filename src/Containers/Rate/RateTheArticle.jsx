import './rate.css'
import { SiFireship } from "react-icons/si";
import { BiSolidLike } from "react-icons/bi";
import { FaFaceGrinStars  } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";
const RateTheArticle = () => {
  return (
    <div className='Leader_rate' >
      <div className="Leader_rate-header">
        <h3> ماهو تقييمك لهذا الموضوع , هل استمتعت به ؟ </h3>
      </div>
      <div className="Leader_rate-container">
        <div className="Leader_rate-container-choices">
            <FaMedal   className="Leader_rate-container-choices_icons"/>
            <p> ممتاز </p>
        </div>
        <div className="Leader_rate-container-choices">
            <SiFireship  className="Leader_rate-container-choices_icons"/>
            <p> مذهل </p>
        </div>
        <div className="Leader_rate-container-choices">
            <FaFaceGrinStars className="Leader_rate-container-choices_icons"/>
            <p> جيد </p>
        </div>
        <div className="Leader_rate-container-choices">
            <BiSolidLike className="Leader_rate-container-choices_icons"/>
            <p> رائع </p>
        </div>
      </div>
    </div>
  )
}

export default RateTheArticle
