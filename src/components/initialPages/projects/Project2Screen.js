import React from 'react'
import { NavBarScreen } from '../../navbar/NavBarScreen'
import { WhatsappButtonScreen } from '../whatsappButton/WhatsappButtonScreen'
import { FooterScreen } from '../../footer/FooterScreen'

export const Project2Screen = () => {
  return (
    <>
      <NavBarScreen />
      <div className='container'>
        <div style={{ color: '#09302b' }}>
          <h1><br></br><br></br><br></br>
            <center><b>PSIJ-2019-2023</b></center>
          </h1><br></br>
        </div>
        <div className="row" style={{ paddingBottom: '5vh' }}>
          <div className="col-12 col-sm-12 col-md-6">
            <h4 style={{ textAlign: 'justify' }}>
              El Centro de Solidaridad Internacional de Saguenay-Lac-Saint-Jean y Fundación Arte Nativo, abren la posibilidad a jóvenes profesionales en prácticas comprometidos por desarrollar actividades que aporten a reducir la pobreza y mejorar sus condiciones de vida de poblaciones vulnerables.
            </h4>
          </div>
          <div className="col-12 col-sm-12 col-md-6" style={{ textAlign: 'center' }}>
          <img src={`./assets/images/projects/pro2.jpeg`} width='85%' style={{borderRadius:'10vh'}}></img>
          </div>
        </div>
      </div>
      <FooterScreen />
      <WhatsappButtonScreen />
    </>
  )
}
