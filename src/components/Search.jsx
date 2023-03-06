import {useRef,useEffect,useState} from 'react'

export default function Search(){
  const [windowWidth,setWindowWidth]=useState(window.innerWidth)
  const [margin,setMargin]=useState(0) 
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    // Remove the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const searchbox=useRef(null)
  const infoDiv=useRef(null)
  useEffect(()=>{
    const height=searchbox.current.getBoundingClientRect().height
    searchbox.current.style.top=`-${height/2}px`
    setMargin(height/2)
  },[windowWidth]);
  //api call 
  const [links,setLinks]=useState([])
  const [value,setValue]=useState('')
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false)
  const [copiedIndex,setCopiedIndex]=useState(null)
  const url='https://api.shrtco.de/v2/shorten?url='
  const getch=async(link,e)=>{
    e.preventDefault();
    setLoading(true);
    const data=await fetch(url+link);
    const response=await data.json();
    if(response.ok){
    setLinks(links.concat(response.result))
    setError(false)
    setValue('');
    }
    if(!response.ok){
      console.log('invalind url')
      setError(true)
    }
    setLoading(false)
  }

  const handleCopy=(text,index)=>{
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
  }

  //text change on copy
  useEffect(()=>{
    let time=setTimeout(()=>{
      setCopiedIndex(null)
    },1500)
    return (
      ()=>{
        clearTimeout(time)
      }
    )
  },[copiedIndex])
  return(
    <>
    <div className='search-container p-5 position-relative d-flex flex-column align-items-center'>
      <form onSubmit={(e)=>{getch(value,e)}} ref={searchbox} className='container search-box position-absolute shadow p-5 rounded row justify-content-center'>
        <input disabled={loading?true:false} value={value}  placeholder="Shorten a link here" type='text' className={`p-3 rounded mx-3 col-lg-9 my-2 my-lg-0 ${error?'border-2 border-danger text-danger':'border-0 '} `}onChange={(e)=>{setValue(e.target.value);setError(false)}}/>
        <button type='submit' className='btn btn-primary p-3 col-lg-2'>{loading?'Loading':'Shorten It'}</button>
      <div className='position-relative'>
      {error && <p className=' mx-4 text-danger position-absolute'><i>Please provide a valid url.</i></p>}
      </div>  
      </form>
        
{/*       shorted links */}
      
        {links.length>0 && 
          links.map((item,index)=>{
            const show=copiedIndex===index
            return (
                <div key={index} className='container d-flex flex-lg-row flex-column bg-white p-4  rounded shadow justify-content-between align-items-lg-center text-break' style={index===0?{marginTop:margin+'px'}:{marginTop:'3rem'}}>
              <h5 className='m-1'>{item.original_link}</h5>
        <hr className='m-0'/>
        <div className='d-flex flex-lg-row flex-column'>
        <p className=' m-1 text-primary'>{item.short_link}</p> 
        <button className='btn btn-primary mx-lg-2' onClick={()=>{handleCopy(item.short_link,index)}}>{show?'Copied':'Copy'}</button>
        </div>
          </div>
            )
          }) 
       
 }
      
      <div  className='text-center info-section'>
       <h2 className='fw-bold'>Advanced Statistics</h2> 
<p>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>  
      </div>    
      <div className='d-lg-flex justify-content-around info-container align-items-center my-lg-5 mb-0'>
      <div className='bg-white rounded shadow info mx-3 p-3 pt-5 position-relative' style={{width:'18rem'}}>
        <h2>Brand Recognition</h2>
        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
        <div className='img bg-dark p-3 position-absolute'>
         <img src='/images/icon-brand-recognition.svg'/>
        </div>
       
      </div>
        <div className='bg-white rounded shadow info mx-3 p-3 pt-5 position-relative' style={{width:'18rem'}}>
        <h2>Detailed Records</h2>
        <p> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
</p>
            <div className='img bg-dark p-3 position-absolute'>
         <img src='/images/icon-detailed-records.svg'/>
        </div>
      </div>
        <div className='bg-white rounded shadow info mx-3 p-3 pt-5 position-relative' style={{width:'18rem'}}>
        <h2>Fully Customizable</h2>
        <p>  Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            <div className='img bg-dark p-3 position-absolute'>
         <img src='/images/icon-fully-customizable.svg'/>
        </div>
      </div>
      </div>
    </div>
    </>
  )
  
}