import './detaile.css'
const N_detaile = ({Title , date , time , type , cover , content , Source }) => {
  return (
    <div className='Leader__detailes'>
        <div className="Leader__detailes-hearder" style={{'alignItems' : 'flex-start' , 'marginBottom' : `1rem`}}>
       <div className="Leader__news_detailes-hearder__detailes">
        <h3> {type === 'Trend' && 'متداول'}
             {type === 'Top' && 'أفضل الأخبار'}
             {type === 'Breaking' && 'عاجل'} 
             {type === 'Letest' && 'تحديثات'}
             {type === 'Advertisment' && 'اعلان'}</h3>
        <h3> نشر يوم : {date} - {time} </h3>
       </div>
        <h1 style={{'textAlign': 'start'}} > {Title} </h1>
         </div>
         <div className="Leader__detailes-cover" style={{'justifyContent' : 'flex-start'}}>
            <img src={cover} alt="cover" />
        </div>
        <div className="Leader__detailes-container" style={{'paddingRight':`0` , 'alignItems':'flex-start'}}>
                <p style={{'marginRight':`0`}} > {content} </p>
                <h4> المصدر الرسمي للخبر : {Source} </h4>
        </div>
    </div>
  )
}

export default N_detaile
