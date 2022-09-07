import React from 'react'
import './carousel.css';
import { FaHome } from "react-icons/fa";

export const CarouselScreen = () => {
  return (
    <>
        <div id="carouselExampleIndicators" className="carousel slide" style={{zIndex:'0', paddingTop:'8vh'}} data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000"  style={{backgroundImage:`url('./assets/images/carousel/banner1w.png')`}}>
                    <div >
                        {/* <div className="text_cent_img camping-letters animate__animated animate__fadeInLeft "><h1 className="tit-sob-img" >CAMPING CHIMBORAZO</h1></div>
                        <div className="text_cent_img2 animate__animated animate__fadeInRight "><p className="tit-sob-img2" style={{color:"white"}}>La aventura está en el camino</p></div> */}
                    </div>
                </div>

                <div className="carousel-item" style={{backgroundImage:`url('./assets/images/carousel/banner4.jpeg')`}}>
                </div>
                <div className="carousel-item" style={{backgroundImage:`url('./assets/images/carousel/banner3.jpeg')`}}>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span  className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
    )
}
