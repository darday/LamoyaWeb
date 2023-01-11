import React from 'react'
import { NavBarScreen } from '../../navbar/NavBarScreen'
import { WhatsappButtonScreen } from '../whatsappButton/WhatsappButtonScreen'
import { FooterScreen } from '../../footer/FooterScreen'

export const Project4Screen = () => {
  return (
    <>
      <NavBarScreen />
      <div className='container'>
        <div style={{ color: '#09302b' }}>
          <h1><br></br><br></br><br></br>
            <center><b>FESTIVAL CINE ECUATORIANO KUNTURÑAWI 2006-2022</b></center>
          </h1><br></br>
        </div>
        <div className="row" style={{ paddingBottom: '5vh' }}>
          <div className="col-12 col-sm-12 col-md-6">
            <h4 style={{ textAlign: 'justify' }}>
              Kunturñawi, es una apuesta al cine ecuatoriano, su descentralización hacia el centro del país: ciudades y comunidades indígenas, para accedan a las películas como un derecho y la formación de públicos menos favorecidos. A lo largo de estas diez ediciones se ha constituido en la ventada de difusión de 417 films a una audiencia de mas de cien mil ciudadanos urbanos y rurales.
              <br></br>
              <br></br>
              Estamos en la vigésimo primera edición y la miradas son diversas en 37 obras cinematográficas que serán expuestas del 5 al 12 de noviembre del 2022 en las Provincias de Chimborazo, Cotopaxi, Tungurahua y Bolívar.
            </h4>
          </div>
          <div className="col-12 col-sm-12 col-md-6" style={{ textAlign: 'center' }}>
            <img src={`./assets/images/projects/pro4.jpg`} width='85%' style={{ borderRadius: '10vh' }}></img>
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
