import React from 'react'
import './Rightbar.css'
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.avif'
import img3 from '../../img/ing3.jpg'
import img4 from '../../img/img4.webp'
import img5 from '../../img/img5.jpg'
import img6 from '../../img/img6.jpg'
import img7 from '../../img/img7.jpg'







export default function Rightbar() {
  return (
    <div className='rightBarContainer'>
      <div style={{marginTop:'100px'}}>
        <div style={{marginLeft:'0px', paddingTop:'20px'}}>
        <img src={`${img1}`} alt='' className='progileImage'/>
          <div className='dott'>
          </div>
        </div>
        <div style={{marginLeft:'0px', paddingTop:'20px'}}>
        <img src={`${img2}`} alt='' className='progileImage'/>
          <div className='dott'>
          </div>
        </div>
        <div style={{marginLeft:'0px', paddingTop:'20px'}}>
        <img src={`${img3}`} alt='' className='progileImage'/>
          <div className='dott-red'>
          </div>
        </div>
        <div style={{marginLeft:'0px', paddingTop:'20px'}}>
        <img src={`${img4}`} alt='' className='progileImage'/>
          <div className='dott'>
          </div>
        </div>
        <div style={{marginLeft:'0px', paddingTop:'20px'}}>
        <img src={`${img5}`} alt='' className='progileImage'/>
          <div className='dott'>
          </div>
          
        </div>
        
        <div style={{marginLeft:'0px', paddingTop:'20px'}}>
        <img src={`${img6}`} alt='' className='progileImage'/>
          <div className='dott-red'>
          </div>
        </div>
        <div style={{marginLeft:'0px', paddingTop:'20px'}}>
        <img src={`${img7}`} alt='' className='progileImage'/>
          <div className='dott'>
          </div>
      </div>
    </div>
    </div>
  )
}
