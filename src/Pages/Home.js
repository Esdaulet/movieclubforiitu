import React from 'react'
import Rightbar from '../components/Rightbar/Rightbar'
import Main  from '../components/Main/Main'
import Leftbar from '../components/Leftbar/Leftbar'
import "./Home.css"

export default function Home() {
  return (
    <div className='mainContainer'>
        <Leftbar/>
        <Main/>
        <Rightbar/>
        
    </div>
  )
}
