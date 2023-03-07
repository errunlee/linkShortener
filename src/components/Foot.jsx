import links from './data'
export default function Foot(){
  return (
    <div>
    <div className='top-footer text-white p-5 text-center'>
    <h2 className='fw-bold mb-3'>
    Boost your links today
    </h2>
        <button style={{borderRadius:'50px'}}className='fw-bold btn bg-info text-light p-3 my-3'>Get started</button>     
    </div>
      <div className='last-footer d-flex justify-content-around text-white p-5'>
        <div className='logo'>
          <h2>Shotrly</h2>
        </div>
          {
            links.map((item,index)=>{
              return(
                <div className='d-flex flex-column' key={index}>
                  <h3>{item.title}</h3>
                  {
                    item.items.map((data,index)=>{
                      return <p key={index}>{data}</p>
                    })
                  }
                </div>
              )
            })
          }
        <div className='social d-flex'>
        <img src='/images/icon-facebook.svg'></img>
        <img src='/images/icon-twitter.svg' fill='red'></img>
        <img src='/images/icon-pinterest.svg'></img>
        <img src='/images/icon-instagram.svg'></img>        
        </div>
      </div>
    </div>
  )
}