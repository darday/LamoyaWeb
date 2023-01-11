import React from 'react'
import { NavBarScreen } from '../../navbar/NavBarScreen'
import { WhatsappButtonScreen } from '../whatsappButton/WhatsappButtonScreen'
import { FooterScreen } from '../../footer/FooterScreen'

export const Project1Screen = () => {
  return (
    <>
      <NavBarScreen />
      <div className='container'>
        <div style={{ color: '#09302b' }}>
          <h1><br></br><br></br><br></br>
            <center><b>NQSF 2018-2022</b></center>
          </h1><br></br>
        </div>
        <div className="row" style={{ paddingBottom: '5vh' }}>
          <div className="col-12 col-sm-12 col-md-6">
            <h4 style={{ textAlign: 'justify' }}>
              “Reactivación para la autodeterminación de las mujeres de la Comunidad La Moya”, ejecutado por la Fundación Arte Nativo, con el aporte del Ministerio de Relaciones Exteriores Internacionales de Canadá y el Centro de Solidaridad Internacional de Saguenay-Lac-Saint-Jean.
            </h4>
            <ul className="list-unstyled">
              <li>
                <ul>
                  <li><h4>Fortalecer la soberanía alimentaria, salud preventiva y promover el emprendimiento</h4></li>
                  <li><h4>Promover la artesanía y economía propia de las mujeres </h4></li>
                  <li><h4>Encuentro de mujeres para el empoderamiento de derechos</h4></li>
                  <li><h4>Fortalecimiento de la identidad cultural y la autodeterminación de las mujeres</h4></li>
                  <li><h4>Apoyar a la creación de productos artísticos para el turismo comunitario</h4></li>
                  
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6" style={{ textAlign: 'center' }}>
            <img src={`./assets/images/projects/pro1.jpeg`} width='85%' style={{borderRadius:'10vh'}}></img>
          </div>
        </div>
      </div>
      <FooterScreen />
      <WhatsappButtonScreen />
    </>
  )
}
