import React from 'react'
import { CarouselScreen } from '../carousel/CarouselScreen'
import { FooterScreen } from '../footer/FooterScreen';
import { NavBarScreen } from '../navbar/NavBarScreen'

export const IndexScreen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu",1);
  return (
    <>
        <NavBarScreen/>
        <CarouselScreen/>
        {/* <img src= { `./assets/img/index1.png` } width="100%" height= 'auto'></img> */}

        {/* pantalla grande */}

        <div className='imgfondo index-pg-info'>
          <div className='container'>
             <div style={{ paddingBottom: '5vh'}}>
              <div className='row '>
                <div className='col-12 col-sm-6'>
                  <div className="tittle-moya">
                    <img src= { `./assets/img/titulomoya.png`} width='80%'></img>
                  </div>
                  <div className="centradomoya1"> 
                    <p>Turismo comunitario es aquel en el que abrimos las puertas de nuestras
                      casas, compartimos nuestros conocimientos ancestrales, ofertamos
                      experiencias auténticas, y contacto directo con la naturaleza. 
                    </p>                
                  </div>                
                </div>
                <div className='col-12 col-sm-6'>
                  <div className="centradomoya2">    
                    <p>  
                      La Moya está ubicada a 20 minutos de la ciudad de Riobamba, en la
                      provincia de Chimborazo, somos una comunidad de origen Puruha,
                      ofertamos servicios de alimentación y hospedaje, disponemos de
                      habitaciones, valoramos el rescate de la cultura, estamos orgullosos de
                      nuestras costumbres y nos gusta compartirlas con quienes nos visitan.
                    </p>               
                  </div>
                </div>
              </div>

              
            </div> 
          </div>
        </div>
        {/* fin de pantalla grande */}

        {/* pantalla pequenia */}

        <div style={{backgroundImage:`url('./assets/images/movil/fondo1-min.png')`}}>
          <div className='row index-pp-info' style={{paddingTop:'5vh', paddingBottom:'5vh'}}>
            <div className='col-12 col-sm-12'>
              <div className="text-center">
                <img src= { `./assets/img/titulomoya.png`} width='50%'></img>
              </div>                           
            </div>
            <div className='col-12 col-sm-12'>
              <div className="container text-center">   
              <br></br>
 
                <p style={{color:'white'}}>Turismo comunitario es aquel en el que abrimos las puertas de nuestras
                  casas, compartimos nuestros conocimientos ancestrales, ofertamos
                  experiencias auténticas, y contacto directo con la naturaleza. 
                </p>   
                <p  style={{color:'white'}}>  
                  La Moya está ubicada a 20 minutos de la ciudad de Riobamba, en la
                  provincia de Chimborazo, somos una comunidad de origen Puruha,
                  ofertamos servicios de alimentación y hospedaje, disponemos de
                  habitaciones, valoramos el rescate de la cultura, estamos orgullosos de
                  nuestras costumbres y nos gusta compartirlas con quienes nos visitan.
                </p>               
              </div>
            </div>
          </div>

        </div>
        {/* fin de pantalla pequenia */}
        
        <div>
          <img src= { `./assets/img/index2.jpeg` } width="100%" height= 'auto'></img>
        </div> 

        <div className='container'>
          <div style={{ paddingBottom: '5vh'}}>
            <div className='row'>
              <div className='col-12 col-sm-6' >
                
                <div className='text-center'>
                  <a href={"/pack1"}>
                    <img src= { `./assets/img/index2a.png` }  style={{ paddingTop: '5vh', width:'60%'}}></img>
                  </a> 
                </div>
              </div>
              <div className='col-12 col-sm-6'>
                <div className='text-center'>
                  <a href={"/pack2"}>
                      <img src= { `./assets/img/index2b.png` } style={{ paddingTop: '5vh',  width:'60%'}}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> 

        <div style={{ paddingBottom: '5vh' }}>
          <center><img src= { `./assets/img/index2c.png` } width="2 0%" height= 'auto'></img></center>
        </div> 

      {/* pantallas grande */}

      <div className='index-pg-visit'>
        <div className='container'>
         <center><h1 style={{color: '#09302b', fontSize: '2.5rem', textAlign: 'center' }}>LUGARES A VISITAR SI ESTAS CERCA DE LA MOYA</h1></center>
          <div style={{ paddingBottom: '0vh' }}>
            <div className='row'>
              <div className='col-12 col-sm-6'>
                <div className='image-visit'>
                  <img src= { `./assets/img/index3.jpeg` }  style={{ paddingTop: '5vh' }}></img>
                </div> 
                <div className='icon-visit'><img src= { `./assets/img/iconindex3a.png` }></img></div>
              </div>
              <div className='col-12 col-sm-6'>
                <div className='image-visit1'>
                  <img src= { `./assets/img/index4.jpeg` } style={{ paddingTop: '5vh' }}></img>
                </div>
                    <div className='icon-visit1'><img src= { `./assets/img/iconindex4a.png` }></img></div>              
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div style={{ paddingBottom: '5vh' }}>
            <div className='row'>
            <div className='col-12 col-sm-6'>
                <div className='image-visit'>
                  <img src= { `./assets/img/index5.jpeg` }  style={{ paddingTop: '5vh' }}></img>
                </div> 
                <div className='icon-visit'><img src= { `./assets/img/iconindex5a.png` }></img></div>
              </div>
              <div className='col-12 col-sm-6'>
                <div className='image-visit1'>
                  <img src= { `./assets/img/index6.jpeg` } style={{ paddingTop: '5vh' }}></img>
                </div>
                    <div className='icon-visit1'><img src= { `./assets/img/iconindex6a.png` }></img></div>              
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* fin de pantalla grande */}

      {/* pantalla pequenia */}

      <div className='index-pp-visit'>
        <div className='container'>
          <h1 style={{color: '#09302b', fontSize: '2.5rem', textAlign: 'center' }}>LUGARES A VISITAR SI ESTAS CERCA DE LA MOYA</h1>

          <div style={{ paddingBottom: '5vh'}}>
            <div className='row'>
              <div className='col-12 col-sm-6' >
                <div className='text-center'>
                  <img src= { `./assets/img/index3.jpeg` } style={{ paddingTop: '1vh', width:'90%'}}></img>
                </div>
                <div className='icon-visit'><img src= { `./assets/img/iconindex3a.png` }></img></div>
              </div>
              <div className='col-12 col-sm-6'>
                <div className='text-center'>
                  <img src= { `./assets/img/index4.jpeg` } style={{ paddingTop: '1vh', width:'90%'}}></img>
                </div>
                <div className='icon-visit'><img src= { `./assets/img/iconindex4a.png` }></img></div>
              </div>

              <div className='col-12 col-sm-6' >
                <div className='text-center'>
                  <img src= { `./assets/img/index5.jpeg` } style={{ paddingTop: '1vh', width:'90%'}}></img>
                </div>
                <div className='icon-visit'><img src= { `./assets/img/iconindex5a.png` }></img></div>
              </div>
              <div className='col-12 col-sm-6'>
                <div className='text-center'>
                  <img src= { `./assets/img/index6.jpeg` } style={{ paddingTop: '1vh', width:'90%'}}></img>
                </div>
                <div className='icon-visit'><img src= { `./assets/img/iconindex6a.png` }></img></div>
              </div>
            </div>
          </div>
        
        </div>
      </div>





      {/* fin de pantalla pequenia */}

        {/* <div>
          <img src= { `./assets/img/index7.jpeg` } width="100%" height= 'auto'></img>
        </div> 

        
          <center><img src= { `./assets/img/index8.png` } className='paquetedia1' width="45%" height= 'auto'></img></center>
        
        
        <div  className='container'> */}
          {/* <center><img src= { `./assets/img/index8.png` } width="50%" height= 'auto'></img></center> */}
          {/* <h1 style={{ textAlign: 'center', paddingTop: '5vh', fontSize: '3rem', color:'#09302b', fontFamily: 'Sans-Serif' }}>11:00</h1>
          <div style={{ fontFamily: 'Sans-Serif', textAlign: 'center', fontSize: '2rem', paddingLeft: '15%', paddingRight: '15%', paddingBottom: '10vh', color:'#09302b' }}>Caminata al huerto de plantas medicinales,
            visita del museo, iglesia, artesanías y almuerzo,
            demostración de bocinero e hilandera.
          </div>
        </div> 
        
        <div className='container'>
          <center><img src= { `./assets/img/index9.jpeg` } width="80%" height= 'auto' style={{ paddingLeft: '10%', paddingRight: '10%' }}></img></center>
        </div> 

        <div  className='container'>
          <h1 style={{  fontFamily: 'Sans-Serif', textAlign: 'center', paddingTop: '10vh', fontSize: '3rem', color:'#09302b' }}>14:00</h1>
          <div style={{ fontFamily: 'Sans-Serif', textAlign: 'center', fontSize: '2rem', color:'#09302b' }}>FIN DE LOS SERVICIOS.</div>
          <div style={{ fontFamily: 'Sans-Serif', textAlign: 'center', fontSize: '2rem', paddingLeft: '25%', paddingRight: '25%', paddingBottom: '10vh', color:'#09302b' }}>Tiempos estimados dependerán del
            número de paxs.
          </div>
        </div>

        <div>
          <img src= { `./assets/img/index10.jpeg` } width="100%" height= 'auto'></img>
        </div> 

        <div  className='container'>
          <h1 style={{ fontFamily: 'Sans-Serif', textAlign: 'center', paddingTop: '10vh', fontSize: '3rem', color:'#09302b' }}>INCLUYE:</h1>
          <div style={{ fontFamily: 'Sans-Serif', textAlign: 'center', fontSize: '2rem', paddingLeft: '15%', paddingRight: '15%', paddingBottom: '10vh', color:'#09302b' }}>
            <div >
                  <b>-</b> Ingreso al museo.
            </div>
            <div >
                  <b>-</b> Sendero guiado.
            </div>
            <div >
                  <b>-</b> Almuerzo completo.
            </div>
            <div >
                  <b>-</b> Guianza en la Iglesia.
            </div>
            <div >
                  <b>-</b> Visita a Artesanías.
            </div>
          </div>
        </div>
        
        <div>
          <img src= { `./assets/img/index11.jpeg` } width="100%" height= 'auto'></img>
        </div> 
        
        <div className='container'>
          <div style={{ paddingBottom: '10vh'}}>
            <div className='row'>
              <div className='col-12 col-sm-6' >
                <div className='icon-page'><img src= { `./assets/img/iconindex12.png` } ></img></div>
              </div>
              <div className='col-12 col-sm-6'>
                <div className='text-page'>
                  <div style={{  fontSize: '2.5rem',color:'#09302b' }}>
                    <b>13 USD</b> POR PERSONA
                  </div>
                  <div style={{ fontSize: '2.5rem', color:'#09302b' }}>
                    (MÍNIMO <b>5</b> PASAJEROS)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  */}

        {/* <div style={{paddingTop: '5vh', paddingBottom: '5vh'}}>
          <center><img src= { `./assets/img/iconindex12.png` } width="20%" height= 'auto'></img></center>
          <div style={{ textAlign: 'center', fontSize: '5rem', paddingLeft: '15%', paddingRight: '15%', color:'#09302b' }}>
            <b>13</b> USD POR PERSONA
          </div>
          <div style={{ textAlign: 'center', fontSize: '5rem', paddingLeft: '15%', paddingRight: '15%', color:'#09302b' }}>
            (MÍNIMO 5 PASAJEROS)
          </div>
          <div style={{ textAlign: 'center', fontSize: '5rem', paddingLeft: '15%', paddingRight: '15%', paddingTop: '5vh', color:'#09302b' }}>
          <center><hr width="10%" ></hr></center>
          </div>
        </div>  */}

        {/* <div>
          <img src= { `./assets/img/index12.jpeg` } width="100%" height= 'auto'></img>
        </div> 

        <center><img src= { `./assets/img/index13.png` } className='paquetemoya' width="45%" height= 'auto'></img></center>  */}
    
    
        <FooterScreen/>
    
    
    
    </>
  )
}
