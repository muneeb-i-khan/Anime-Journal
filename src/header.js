import React from "react"
import Arrow from './arrow.png'
import Star from './star.png'
export default function Head(){
    return(
      <div className='head'>
        <div className="top-container">
            <img src={Arrow} width="40px" className="top-1"></img> 
           
        </div>
        <span className='head-1'>Anime </span><span className='head-2'>Journal</span>
        <p className="head-p">Below are some of the Animes I,ve watched and my thoughts about them.</p>
      </div>
    )
  }
  
  