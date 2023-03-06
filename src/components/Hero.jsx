import Navbar from './Navbar'
import Main from './Main'
import Foot from './Foot'
import Search from './Search'

export default function Hero(){
  return (
    <div>
    <Navbar/>
    <div className='container mt-5'>
    <Main/>
    </div>
    <Search/>
    <Foot/>
      
    </div>
  )
}