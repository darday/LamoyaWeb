import React from 'react'
import { NavBarScreen } from '../navbar/NavBarScreen';
import { WhatsappButtonScreen } from './whatsappButton/WhatsappButtonScreen';
import { FooterScreen } from '../footer/FooterScreen';

export const ProyectosScreen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu", 8);
  return (
    <>
      <NavBarScreen />
      {/* <div className='imgfondoProy index-pg-info'>
        <div className='container'>
          <div style={{ paddingBottom: '5vh' }}>
            <div className='row '>
              <div className='col-12 col-sm-6'>
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
      </div> */}

      <div className='container'><br></br><br></br><br></br>
        <div className="textgastro13" style={{ color: '#09302b' }}>
          <h1>
            <b>ARTESANIAS</b>
          </h1>
          <h4 className='texto-pack12'><br></br>
            En esta parte poner la descripción de la gastronomía en general de la moya o la info que se desee.
          </h4>
        </div>
      </div>

      <div className='container'>
        <div style={{ color: '#09302b' }}>
          <h1>
            <center><b>PROYECTOS</b></center>
          </h1><br></br>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto1"}>
                <img src={`./assets/img/index6.jpeg`}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>TITULO PROYECTO</b></h5>
                <p className="card-text">Breve descripción…</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto2"}>
                <img src={`./assets/img/index6.jpeg`}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>TITULO PROYECTO</b></h5>
                <p className="card-text">Breve descripción…</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto3"}>
                <img src={`./assets/img/index6.jpeg`}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>TITULO PROYECTO</b></h5>
                <p className="card-text">Breve descripción…</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto4"}>
                <img src={`./assets/img/index6.jpeg`}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>TITULO PROYECTO</b></h5>
                <p className="card-text">Breve descripción…</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsappButtonScreen />
      <FooterScreen />

    </>

  )
}
