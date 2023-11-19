import React from "react";
import "./Main.css";
import Navbar from "../../Navbar/Navbar";
import WakeupBro from "../../img/WakeupBro.jpeg";
import avengers from "../../img/avengers.jpg";
import lion from '../../img/lion.jpg'
import billion from '../../img/billion.jpg'
import mars from '../../img/mars.jpg'
import potter from '../../img/Harry_Potter.jpg'
import movie1 from "../../img/movie1.jpg"
import movie2 from '../../img/movie9.webp'
import movie3 from '../../img/movie10.webp'
import movie4 from '../../img/movie8.webp'
import movie5 from '../../img/movie7.webp'
import movie6 from '../../img/movie6.webp'
import movie7 from '../../img/movie5.webp'
import movie8 from '../../img/movie4.webp'
import movie9 from '../../img/movie2.jpg'
import movie10 from '../../img/movie3.webp'


export default function Main() {
  return (
    <div className="mainCont">
      <Navbar />
      <div>
        <img src={`${WakeupBro}`} className="wakeup" />
        <div className="ItemsContainer">
          <p className="tittle">Оян, Қазақ!</p>
          <p className="subtittle">100 watch</p>
        </div>
        <div className="DivWatch">
          <button className="btnWatch">Watch now</button>
          <div className="watchLater">
            <p className="plus">+</p>
          </div>
        </div>
        <div>
          <h4 className="submainTittle">Continue Wathcing</h4>
          <div>
            <div style={{display:"flex",marginLeft:"30px" , flexWrap:"wrap" , marginTop:"-30px"}}>
              <div className="itemContainer">
                <img src={`${avengers}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${billion}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${mars}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${potter}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${lion}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              
            </div>
          </div>
        </div>
        <div>
          <h4 className="submainTittle" style={{marginTop:'20px'}}>Best Movies of the Year</h4>
          <div>
            <div style={{display:"flex",marginLeft:"30px" , flexWrap:"wrap" , marginTop:"-10px"}}>
              <div className="itemContainer">
                <img src={`${avengers}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${billion}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${mars}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${potter}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${lion}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${movie1}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${movie2}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${movie3}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${movie4}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
              <div className="itemContainer">
                <img src={`${movie5}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Watch now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="submainTittle" style={{marginTop:'20px'}}>Movies for Pear</h4>
          <div>
            <div style={{display:"flex",marginLeft:"30px" , flexWrap:"wrap" , marginTop:"-30px"}}>
              <div className="itemContainer">
                <img src={`${movie6}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Buy now</button>
              </div>
              <div className="itemContainer">
                <img src={`${movie7}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Buy now</button>
              </div>
              <div className="itemContainer">
                <img src={`${movie8}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Buy now</button>
              </div>
              <div className="itemContainer">
                <img src={`${movie9}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Buy now</button>
              </div>
              <div className="itemContainer">
                <img src={`${movie10}`} className={"avengersImg"} alt=" " />
                <button className="btnWatchContainer">Buy now</button>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
