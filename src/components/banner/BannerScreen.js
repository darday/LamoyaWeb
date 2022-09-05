import React from 'react'
import './banner.css';


export const BannerScreen = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" style={{zIndex:'0'}} data-bs-ride="true">
            
            <div className="carousel-inner">
                <div className="carousel-item active slider" data-bs-interval="4000"  style={{backgroundImage:`url('./assets/images/carousel/banner4.jpeg')`}}>
                    <div >
                        <div className="text_cent_img camping-letters animate__animated animate__fadeInLeft ">
                          <h1 className="tit-sob-img-moya" > GALERIA DE FOTOS</h1>
                        </div>
                    </div>
                </div>

                
            </div>
           
        </div>
    </>
  )
}
