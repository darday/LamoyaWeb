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

      <div className='container'><br></br><br></br><br></br><br></br><br></br>
        <h1 className='text-center'>
          <b>PROYECTOS</b>
        </h1>
        <div className='row'>
          <div className='col-4'>
            <img src={`./assets/images/logos/quebec.png`} style={{ paddingTop: '1.5vh' }} width='125%'></img>
          </div>
          <div className='col-4'>
            <img src={`./assets/images/logos/arteNativo.png`} width='100%'></img>
          </div>
          <div className='col-4'>
            <img src={`./assets/images/logos/ministerio.png`} width='100%'></img>
          </div>
        </div>
        <div className="textgastro13" style={{ color: '#09302b' }}>
          <h4 className='texto-pack12'>
            Proyectos ejecutados por la Fundación Arte Nativo en la comunidad La Moya con el apoyo del Ministerio de Relaciones Internacionales y de la Francofonia y el Centro de Solidaridad Internacional
          </h4>
        </div>
      </div>

      <div className='container'>
        <div style={{ color: '#09302b' }}>
          <br></br>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card text-center" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto1"}>
                <img src={`./assets/images/projects/pro1.jpeg`} width='85%' style={{ borderRadius: '10vh' }}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>NQSF 2018-2023</b></h5>
                {/* <p className="card-text">Reactivación para la autodeterminación de las mujeres de la Comunidad La Moya...</p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto2"}>
                <img src={`./assets/images/projects/pro2.jpeg`} width='85%' style={{ borderRadius: '10vh' }}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>PSIJ-2019-2023</b></h5>
                {/* <p className="card-text">Breve descripción…</p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto3"}>
                <img src={`./assets/images/projects/pro3.jpg`} width='85%' style={{ borderRadius: '10vh' }}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>CÉGEP-2019-2023</b></h5>
                {/* <p className="card-text">Breve descripción…</p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto4"}>
                <img src={`./assets/images/projects/pro4.jpg`} width='85%' style={{ borderRadius: '10vh' }}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>FESTIVAL CINE ECUATORIANO KUNTURÑAWI 2006-2022</b></h5>
                {/* <p className="card-text">Breve descripción…</p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto5"}>
                <img src={`./assets/images/projects/pro5.jpg`} width='85%' style={{ borderRadius: '10vh' }}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>CLUBES DE TEATRO Y CINE EN UNIDADES EDUCATIVAS Y COMUNIDADES INDIGENAS 2007-2022</b></h5>
                {/* <p className="card-text">Breve descripción…</p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto6"}>
                <img src={`./assets/images/projects/pro6.jpg`} width='85%' style={{ borderRadius: '10vh' }}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>FESTIVAL INFANTIL-JUVENIL “WAWAS AL CINE” 2017-2022</b></h5>
                {/* <p className="card-text">Breve descripción…</p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center" style={{ border: '0', paddingLeft: '6vh', paddingRight: '6vh' }}>
              <a href={"/proyecto7"}>
                <img src={`./assets/images/projects/pro7.jpg`} width='85%' style={{ borderRadius: '10vh' }}></img>
              </a>
              <div className="card-body">
                <h5 className="card-title"><b>REVITALIZACIÓN CULTURAL EN OZOGOCHE - 2002 - 2015: </b></h5>
                {/* <p className="card-text">Breve descripción…</p> */}
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
