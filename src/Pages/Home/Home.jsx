import { Articles, Header, News, Reviews, Theories , Footer } from '../../Containers'
import { Navbar } from '../../Components'
const Home = () => {
  return (
    <div id='home'>
      <Navbar/>
      <Header/>
      <News/>
      <Articles/>
      <Theories/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home
