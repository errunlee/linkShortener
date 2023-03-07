import {createContext,useState,useEffect} from 'react'

const Appcontext=createContext();
const Appprovider=({children})=>{
  const [showNav,setShowNav]=useState(false)
  const [links,setLinks]=useState([])
  
  //saving and getting from localstorage
  //saving
  function saveToLocal(data){
    localStorage.setItem('userlinks',JSON.stringify(data))
  }
  function getFromLocal(){
    const data=JSON.parse(localStorage.getItem('userlinks'))
    if(data){
      setLinks(data)
    }
  }
     //previous datas
  useEffect(()=>{
    getFromLocal();
  },[])
  //when [links] changes save to local
  useEffect(()=>{
    if(links.length>0){
    saveToLocal(links)
    }
  },[links])
  return <Appcontext.Provider value={{showNav,setShowNav,saveToLocal,getFromLocal,links,setLinks}}>{children}</Appcontext.Provider>
}
export {Appcontext, Appprovider}