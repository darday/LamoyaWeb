import React from 'react'

export const CarouselScreen3g = () => {
  return (
    <div id="carouselExampleIndicators" style={{paddingTop:'10vh'}} className="carousel slide animate__animated animate__fadeIn" data-ride="carousel" >
        <ol style={{textAlign:'right',right:0,left:'initial'}} className="carousel-indicators">
            <li style={{borderRadius:'100% !important'}} data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000"  style={{backgroundImage:`url('./assets/img/gastro3.jpeg')`}}> 
                <div >
                    {/* <div className="text_cent_img camping-letters animate__animated animate__fadeInLeft "><h1 className="tit-sob-img" >CAMPING CHIMBORAZO</h1></div>
                    <div className="text_cent_img2 animate__animated animate__fadeInRight "><p className="tit-sob-img2" style={{color:"white"}}>La aventura está en el camino</p></div> */}
                </div>
            </div>     
        </div>       
    </div>
  )
}

