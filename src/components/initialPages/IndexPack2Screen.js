import React from 'react'
import { CarouselScreen } from '../carousel/CarouselScreen'
import { CarouselScreen2 } from '../carousel/CarouselScreen2'
import { NavBarScreen } from '../navbar/NavBarScreen'
import { MapsScreen } from '../Maps/MapsScreen'
import { useHistory } from 'react-router-dom'

export const IndexPack2Screen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu",4);
  // const history = useHistory();
  // const handleClick = () => history.push('/Pack1');
  return (
    <>
        <NavBarScreen/>
        <CarouselScreen2/>
        {/* <div>
          <img src= { `./assets/img/index12.jpeg` } width="auto" height= '600vh' background></img>
        </div>  */}

        <center><img src= { `./assets/img/index13.png` } className='paquetemoya' width="45%" height= 'auto'></img></center> 

        <div  className='container'>
          <h1 style={{ textAlign: 'center', paddingTop: '2vh', fontSize: '4rem', color:'#09302b', }}><b>DÍA 1</b></h1>
          <div className='texto-pack' >
            4:00 Check inn, caminata, visita
            museo iglesia, tiempo libre.
          </div>
        </div> 

        <div>
          <img src= { `./assets/img/packmoya1.jpeg` } width="100%" height= 'auto'></img>
        </div>

        <div  className='container'>
          <h1 style={{ textAlign: 'center', paddingTop: '10vh', fontSize: '3rem', color:'#09302b', }}>8:00</h1>
          <div className='texto-pack' >
            Canelazo y fogata, cena y pernoctar.
          </div>
        </div>

        <div>
          <img src= { `./assets/img/packmoya2.jpeg` } width="100%" height= 'auto'></img>
        </div>

        <div  className='container'>
          <h1 style={{ textAlign: 'center', paddingTop: '10vh', fontSize: '4rem', color:'#09302b', }}><b>DÍA 2</b></h1>
          <div className='texto-pack' >
            08:00 desayuno y check out.
          </div>
        </div>

        <div className='container'>
          <div style={{ paddingBottom: '10vh'}}>
            <div className='row'>
              <div className='col-12 col-sm-6' style={{paddingBottom:'2vh'}}>
                <center><img src= { `./assets/img/iconindex12.png` } width='23%'></img></center>
                <h1 style={{  textAlign: 'center', paddingTop: '5vh', fontSize: '5vh', color:'#09302b' }}><b>INCLUYE:</b></h1>
                <div className='texto-pack' >
                  <div >
                        <b>-</b> Ingreso al museo.
                  </div>
                  <div >
                        <b>-</b> Sendero guiado.
                  </div>
                  <div >
                        <b>-</b> Guianza en la Iglesia.
                  </div>
                  <div >
                        <b>-</b> Visita a Artesanías.
                  </div>
                  <div >
                        <b>-</b> Desayuno.
                  </div>
                  <div >
                        <b>-</b> Cena.
                  </div>
                  <div >
                        <b>-</b> Canelazo y Fogata.
                  </div>
                  <div >
                        <b>-</b> Hospedaje.
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6'>                
                <center><img src= { `./assets/img/packmoyatabla3.png` } width='62%' style={{paddingBottom: '0vh'}}></img></center>
              </div>
            </div>
          </div>
        </div>

        <center><img src= { `./assets/img/packmoyamapa4.png` } width='10%'></img></center>
        <h1 style={{  textAlign: 'center', paddingTop: '3vh', fontSize: '5vh', color:'#09302b' }}><b>ENCUÉNTRANOS EN</b></h1>
        
        <div className='container' style={{ paddingTop: '5vh', paddingBottom: '5vh', paddingLeft: '10%', paddingRight: '10%' }}>
          <center><MapsScreen/></center>
        </div>
    </>
  )
}
