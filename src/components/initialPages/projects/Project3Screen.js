import React from 'react'
import { NavBarScreen } from '../../navbar/NavBarScreen'
import { WhatsappButtonScreen } from '../whatsappButton/WhatsappButtonScreen'
import { FooterScreen } from '../../footer/FooterScreen'

export const Project3Screen = () => {
  return (
    <>
      <NavBarScreen />
      <div className='container'>
        <div style={{ color: '#09302b' }}>
          <h1><br></br><br></br><br></br>
            <center><b>CÉGEP-2019-2023</b></center>
          </h1><br></br>
        </div>
        <div className="row" style={{ paddingBottom: '5vh' }}>
          <div className="col-12 col-sm-12 col-md-6">
            <h4 style={{ textAlign: 'justify' }}>
              Es un programa de jóvenes estudiantes, que vienen a desarrollar un proyecto cultural, para el fortalecimiento de las relaciones interculturales.
            </h4>
          </div>
          <div className="col-12 col-sm-12 col-md-6" style={{ textAlign: 'center' }}>
            <img src={`./assets/images/projects/pro3.jpg`} width='85%' style={{ borderRadius: '10vh' }}></img>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <FooterScreen />
      <WhatsappButtonScreen />
    </>
  )
}
