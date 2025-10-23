import React from 'react'
import { CarouselScreen } from '../carousel/CarouselScreen'
import { FooterScreen } from '../footer/FooterScreen'
import { NavBarScreen } from '../navbar/NavBarScreen'
import { RitualScreen } from './tours/RitualScreen'
import { WhatsappButtonScreen } from './whatsappButton/WhatsappButtonScreen'
import menupdf from './catalogo.pdf'



export const IndexPack1Screen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu", 3);

  const pdfUrl = menupdf

  const handleClick = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
    } else {
      console.warn("No se proporcionó una URL de PDF.");
    }
  };

  return (
    <>
      <NavBarScreen />

      <div style={{ paddingTop: '8vh' }}>
        <img src={`./assets/img/index7.jpeg`} width="100%" height='auto'></img>
      </div>


      <center><img src={`./assets/img/index8.png`} className='paquetedia1' width="45%" height='auto'></img></center>

      <RitualScreen />

      <br></br>
      <br></br>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href={pdfUrl} // 🔗 cambia por tu PDF real
          target="_blank"
          rel="noopener noreferrer"
          className="tours-button"
        >
          <div className="tours-icon">
            🧭
            <p>TOURS</p>
          </div>
          <span className="tours-text">MIRA TODOS NUESTROS TOURS</span>
        </a>
      </div>



      <div className='container'>
        {/* <center><img src= { `./assets/img/index8.png` } width="50%" height= 'auto'></img></center> */}
        <h1 style={{ textAlign: 'center', paddingTop: '5vh', fontSize: '3rem', color: '#09302b', }}>1:00 PM</h1>
        <div className='texto-pack'>Caminata al huerto de plantas medicinales,
          visita del museo, iglesia, artesanías y almuerzo,
          demostración de bocinero e hilandera.
        </div>
      </div>

      <div className='container'>
        <center><img src={`./assets/img/index9.jpeg`} width="80%" height='auto' style={{ paddingLeft: '10%', paddingRight: '10%' }}></img></center>
      </div>

      <div className='container'>
        <h1 style={{ textAlign: 'center', paddingTop: '10vh', fontSize: '3rem', color: '#09302b' }}>16:00 PM</h1>
        <div style={{ textAlign: 'center', fontSize: '2rem', color: '#09302b' }}>FIN DE LOS SERVICIOS.</div>
        <div className='texto-pack'>Tiempos estimados dependerán del
          número de paxs.
        </div>
      </div>

      <div>
        <img src={`./assets/img/index10.jpeg`} width="100%" height='auto'></img>
      </div>

      <div className='container'>
        <h1 style={{ textAlign: 'center', paddingTop: '10vh', fontSize: '3rem', color: '#09302b' }}>INCLUYE:</h1>
        <div className='texto-pack'>
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
        <img src={`./assets/img/index11.jpeg`} width="100%" height='auto'></img>
      </div>

      <div className='container pg-pack1'>
        <div style={{ paddingBottom: '10vh' }}>
          <div className='row'>
            <div className='col-12 col-sm-6' >
              <div className='icon-page'><img src={`./assets/img/iconindex12.png`} ></img></div>
            </div>
            <div className='col-12 col-sm-6'>
              <div className='text-page'>
                <div style={{ fontSize: '2.5rem', color: '#09302b' }}>
                  <b>13 USD</b> POR PERSONA
                </div>
                <div style={{ fontSize: '2.5rem', color: '#09302b' }}>
                  (MÍNIMO <b>2</b> PASAJEROS)
                </div>
              </div>

            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <h2 className='text-center' >ACEPTAMOS PAGOS CON PAYPHONE, EFECTIVO Y TRANSFERENCIA BANCARIA</h2>
        <div className='text-center'>
          <img src={`./assets/img/payphone.png`} width='10%' style={{ borderRadius: '0px' }}></img>
        </div>
      </div>


      <div className='container pp-pack1'>
        <div style={{ paddingBottom: '10vh', paddingTop: '8vh' }}>
          <div className='row'>
            <div className='col-12 col-sm-6' >
              <div className='text-center'><img src={`./assets/img/iconindex12.png`} width='45%' ></img></div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className='text-center'>
                <div style={{ fontSize: '2rem', color: '#09302b' }}>
                  <b>13 USD</b> POR PERSONA
                </div>
                <div style={{ fontSize: '2rem', color: '#09302b' }}>
                  (MÍNIMO <b>5</b> PASAJEROS)
                </div>

              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <h2 className='text-center' >ACEPTAMOS PAGOS CON PAYPHONE, EFECTIVO Y TRANSFERENCIA BANCARIA</h2>

      </div>



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

      <WhatsappButtonScreen />

      <FooterScreen />


    </>
  )
}
