import React from 'react'
import { NavBarScreen } from '../navbar/NavBarScreen'
import menupdf from './CARTAMENU.pdf'
import { CarouselScreen3g } from '../carousel/CarouselScreen3g';
import { FooterScreen } from '../footer/FooterScreen';

export const GastronomiaScreen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu",2);
  return (
    <>
        <NavBarScreen/>
        <CarouselScreen3g/>
        <div className='imgfondogastro'>
          <div className='container'>
            <div className="textgastro"> 
              <p>
                Los productos con los que preparamos la gastronomía que
                ofertamos en la Moya es producida por las manos de nuestras
                mujeres en las huertas familiares, vegetales siempre frescos y
                orgánicos. En la comunidad preparamos comida típica de los andes
                ecuatorianos. 
              </p>                
            </div>
            <br></br><br></br>              
            <div className="textgastro1"> 
              <p>
                <b>DELÉITATE CON NUESTROS PLATOS TÍPICOS</b>
              </p>              
            </div> 

          </div>
        </div>

        <div>
          <img src= { `./assets/img/gastro3.jpeg` } width="100%" height= 'auto'></img>
        </div> 

        <center>
          <div className='descargamenu'>
            <a href={menupdf} target="_blank">
              <img src= { `./assets/img/gastro12.png` } width="100%" height= 'auto'></img>
            </a>
          </div>
        </center> 

        <div className='container pg-gastronomia-menu'>
          <div style={{ paddingBottom: '0vh' }}>
            <div className='row'>
            <div className='col-12 col-sm-6'>
                <div className='image-visit'>
                  <img src= { `./assets/img/gastro5.png` }  style={{ paddingTop: '5vh' }}></img>
                </div> 
                <div className='icon-visit'><img src= { `./assets/img/gastro7.png` }></img></div>
                <div className='comidas'>
                  Entrada de habas con mellocos, queso y chulpi.<br></br>
                  Crema de zapallo.<br></br>
                  Plato fuerte hamburguesa de lenteja.<br></br>
                  Postre y jugo.
                </div><br></br>
                <div className='comidasingles'>
                  Entrance of beans with mellocos cheese and chulpi.<br></br>
                  Pumpkin cream soup.<br></br>
                  Main dish, lentils as a hamburger.<br></br>
                  Juice of fruit.<br></br>
                </div>
              </div>
              <div className='col-12 col-sm-6'>
                <div className='image-visit1'>
                  <img src= { `./assets/img/gastro6.png` } style={{ paddingTop: '5vh' }}></img>
                </div>
                <div className='icon-visit1'><img src= { `./assets/img/gastro8.png` }></img></div>
                <div className='comidas'>
                  <b>CALDO DE PATA</b><br></br><br></br>
                  Caldo que se prepara con mote y patas de res.
                </div><br></br>
                <div className='comidasingles'>
                  Broth that is prepared with large white carn and beef legs.<br></br>
                </div>              
              </div>
            </div>
          </div>
        </div>

        {/* pantalla pequeña menu */}
        <div className='container pp-gastronomia-menu'>
          <div style={{ paddingBottom: '0vh' }}>
            <div className='row'>
            <div className='col-12 col-sm-6'>
                <div className='text-center'>
                  <img src= { `./assets/img/gastro5.png` }  style={{ paddingTop: '5vh', width:'75%' }}></img>
                </div> 
                <div className='text-center'><img src= { `./assets/img/gastro7.png` } width='50%'></img></div>
                <div className='comidas' style={{fontSize:'1.1rem'}}>
                  Entrada de habas con mellocos, queso y chulpi.<br></br>
                  Crema de zapallo.<br></br>
                  Plato fuerte hamburguesa de lenteja.<br></br>
                  Postre y jugo.
                </div><br></br>
                <div className='comidasingles' style={{fontSize:'1.1rem'}}>
                  Entrance of beans with mellocos cheese and chulpi.<br></br>
                  Pumpkin cream soup.<br></br>
                  Main dish, lentils as a hamburger.<br></br>
                  Juice of fruit.<br></br>
                </div>
              </div>
              <div className='col-12 col-sm-6'>
                <div className='text-center'>
                  <img src= { `./assets/img/gastro6.png` } style={{ paddingTop: '5vh' }} width='75%'></img>
                </div>
                <div className='text-center'><img src= { `./assets/img/gastro8.png` }width='45%'></img></div>
                <div className='comidas' style={{fontSize:'1.1rem'}}>
                  <b>CALDO DE PATA</b><br></br><br></br>
                  Caldo que se prepara con mote y patas de res.
                </div><br></br>
                <div className='comidasingles' style={{fontSize:'1.1rem'}}>
                  Broth that is prepared with large white carn and beef legs.<br></br>
                </div>              
              </div>
            </div>
          </div>
        </div>
        {/* fin pantalla pequeña menu */}

        <div className='container pg-gastronomia-menu2'>
          <div style={{ paddingBottom: '10vh' }}>
            <div className='row'>
            <div className='col-12 col-sm-6'>
                <div className='image-visit'>
                  <img src= { `./assets/img/gastro9.png` }  style={{ paddingTop: '5vh' }}></img>
                </div> 
                <div className='icon-visit'><img src= { `./assets/img/gastro11.png` }></img></div>
                <div className='comidas'>
                  <b>BORREGO ASADO</b><br></br><br></br>
                  Borrego asado con papas campesinas y ensalada.
                </div><br></br>
                <div className='comidasingles'>
                  Roasted lamb with potatoes and salad.<br></br>
                </div> 
              </div>
              <div className='col-12 col-sm-6'>
                <div className='image-visit1'>
                  <img src= { `./assets/img/gastro10.png` } style={{ paddingTop: '5vh' }}></img>
                </div>
                <div className='icon-visit1'><img src= { `./assets/img/gastro11.png` }></img></div>
                <div className='comidas'>
                  <b>CUY ASADO</b><br></br><br></br>
                  Cuy asado con papas en salsa de maní y ensalada.
                </div><br></br>
                <div className='comidasingles'>
                Roasted guinea pig with potatoes in peanut sauce and salad.<br></br>
                </div>              
              </div>
            </div>
          </div>
        </div>

        {/* pantalla pequeña menu2*/}
        <div className='container pp-gastronomia-menu2'>
          <div style={{ paddingBottom: '10vh' }}>
            <div className='row'>
            <div className='col-12 col-sm-6'>
                <div className='text-center'>
                  <img src= { `./assets/img/gastro9.png` }  style={{ paddingTop: '5vh' }} width='75%'></img>
                </div> 
                <div className='text-center'><img src= { `./assets/img/gastro11.png` } width='49%'></img></div>
                <div className='comidas' style={{fontSize:'1.1rem'}}>
                  <b>BORREGO ASADO</b><br></br><br></br>
                  Borrego asado con papas campesinas y ensalada.
                </div><br></br>
                <div className='comidasingles' style={{fontSize:'1.1rem'}}>
                  Roasted lamb with potatoes and salad.<br></br>
                </div> 
              </div>
              <div className='col-12 col-sm-6'>
                <div className='text-center'>
                  <img src= { `./assets/img/gastro10.png` } style={{ paddingTop: '5vh' }} width='75%'></img>
                </div>
                <div className='text-center'><img src= { `./assets/img/gastro11.png` } width='49%'></img></div>
                <div className='comidas' style={{fontSize:'1.1rem'}}>
                  <b>CUY ASADO</b><br></br><br></br>
                  Cuy asado con papas en salsa de maní y ensalada.
                </div><br></br>
                <div className='comidasingles' style={{fontSize:'1.1rem'}}>
                Roasted guinea pig with potatoes in peanut sauce and salad.<br></br>
                </div>              
              </div>
            </div>
          </div>
        </div>
        {/* fin pantalla pequeña */}

        {/* <center>
          <div className='descargamenu'>
            <a href={"/pack1"}>
              <img src= { `./assets/img/gastro12.png` } width="100%" height= 'auto'></img>
            </a>
          </div>
        </center> */}

        <div>
          <img src= { `./assets/img/gastro13.jpeg` } width="100%" height= 'auto'></img>
        </div>
        
        <FooterScreen/>
    </>
    )
}
