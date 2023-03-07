import './App.css'
import { useContext } from 'react'
import {Appcontext} from './components/context'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function App() {
  const {showNav,setShowNav}=useContext(Appcontext)
  return (
    <>
    <main className='position-relative'>
      <Navbar/>
      {showNav && <div onClick={()=>{setShowNav(false)}} onTouchMove={()=>{setShowNav(false)}} className='overlay d-block'>
      </div>}
      <Hero/>
    </main>
    </>
      
  )      
}
