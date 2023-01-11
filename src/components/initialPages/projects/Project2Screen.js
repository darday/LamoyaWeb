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
            <center><b>PROYECTOS</b></center>
          </h1><br></br>
        </div>
        <div className="row" style={{ paddingBottom: '5vh' }}>
          <div className="col-12 col-sm-12 col-md-6">
            <h4 style={{ textAlign: 'justify' }}>
              Un párrafo es una unidad de un texto compuesta por una o varias oraciones, que comienza con una mayúscula y
              que termina con un punto y aparte. Los textos se organizan de manera tal que cada párrafo trata sobre una idea central.
              Generalmente, la primera oración de cada párrafo suele explicitar cuál es el punto principal que se desarrollará.
            </h4>
          </div>
          <div className="col-12 col-sm-12 col-md-6" style={{ textAlign: 'center' }}>
            <img src={`./assets/img/index6.jpeg`} width='80%'></img>
          </div>
        </div>
      </div>
      <FooterScreen />
      <WhatsappButtonScreen />
    </>
  )
}
