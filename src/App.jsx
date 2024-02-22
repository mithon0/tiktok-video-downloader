
import { useState } from 'react'
import './App.css'
import tiktokdownload from './api';
import ReactLoading from "react-loading"
import bgVideo from "../src/assets/bgVideo/bg.mp4"


function App() {
 const [data,setData]=useState(null)
 const [loading,setLoading]=useState(false)
 

  const handleDownload = async(e) => {
    e.preventDefault()
    const url =e.target.url.value;
    setLoading(true)
   try{
    const data =await tiktokdownload(url)
   setData(data)
   setLoading(false)
   }catch(e){
    console.log(e)
   }
  }
 
  
  return (
    <div className='container'>
      <div className='container1'>
        <video className='bg' src={bgVideo}  autoPlay loop muted></video>
      </div>
      <div className='container2'>
        <form onSubmit={handleDownload} className="input-container">
          
            <h1>Download tiktok video Without watermark</h1>
            <div className='f'>
            <input  className='url_input' type="" name='url' placeholder='Past Your link here' />


            </div>
            <button className='download-btn' type='submit'>Download</button>
         
        </form>
        <div className='video'>
          {
            loading? <ReactLoading type={'balls'} color={"red"} height={667} width={200} />:<></>
          }
          {
            data?<video controls autoPlay loop className='video-bg'  width={640} height={360}>
            <source src={data?.data?.data?.play} type='video/mp4'></source>
          </video>:<></>
          }
        </div>
      </div>
    </div>
  )
}

export default App
