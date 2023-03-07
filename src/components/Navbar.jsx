import {useState,useContext} from 'react'
import {Appcontext} from './context'
export default function Navbar(){
  const {showNav,setShowNav}=useContext(Appcontext)
  return (
    <div>
      <nav className='d-flex justify-content-between align-items-center fw-bold p-2 px-lg-5'>
      <div className='d-flex align-items-center '>
      <h2 className='mx-3 text-dark fw-bolder'>
      Shortly
      </h2>
        <div className='d-flex hidden-small'>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        </div>        
      </div>
        <div className='d-flex login align-items-center hidden-small'>
        <p className='my-0 mx-2'>Login</p>
          <button style={{borderRadius:'50px'}}className='fw-bold btn bg-info text-light px-3 py-2 '>SignUp</button>
        </div>
        <div onClick={()=>{setShowNav(!showNav)}} className='d-lg-none '>{ !showNav? <svg  viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>:<svg viewBox="0 0 100 100" width="40" height="40">
    <line x1="20" y1="20" x2="80" y2="80" stroke="#000" stroke-width="10" />
    <line x1="20" y1="80" x2="80" y2="20" stroke="#000" stroke-width="10" />
  </svg>}</div>
      </nav>      
      {showNav &&    <div className='position-fixed mobile-nav   mx-auto rounded'>
        <div className='d-flex flex-column align-items-center p-4'>
      <li >Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <div className='bg-light'></div>
      <p className='m-0'>Login</p>
            <button style={{borderRadius:'50px'}}className='fw-bold btn bg-info text-light px-3 py-2 m-0'>SignUp</button>
          </div>
      </div>}
    </div>
  )
}