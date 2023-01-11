import React from 'react'
import { FooterScreen } from '../../footer/FooterScreen'
import { NavBarScreen } from '../../navbar/NavBarScreen'
import { WhatsappButtonScreen } from '../whatsappButton/WhatsappButtonScreen'

export const Project6Screen = () => {
    return (
        <>
            <NavBarScreen />
            <div className='container'>
                <div style={{ color: '#09302b' }}>
                    <h1><br></br><br></br><br></br>
                        <center><b>FESTIVAL INFANTIL-JUVENIL “WAWAS AL CINE” 2017-2022</b></center>
                    </h1><br></br>
                </div>
                <div className="row" style={{ paddingBottom: '5vh' }}>
                    <div className="col-12 col-sm-12 col-md-6">
                        <h4 style={{ textAlign: 'justify' }}>
                            El Festival de Cine Infantil Juvenil “Wawas al Cine”, desde su creación hasta la presente, es el único espacio al que tienen acceso los niños, niñas y jóvenes, para ver cine de autor y participar en el foro a través de la herramienta “cine en el aula” con la participación de los maestros.
                            <br></br>
                            <br></br>
                            El público objetivo son escuelas y colegios donde trabajamos los clubes de cine. Los participantes responden afirmativamente a este espacio para adquirir nuevos conocimientos, formación de pensamiento crítico y desarrollo de otras competencias interculturales.
                        </h4>

                    </div>
                    <div className="col-12 col-sm-12 col-md-6" style={{ textAlign: 'center' }}>
                        <img src={`./assets/images/projects/pro6.jpg`} width='85%' style={{ borderRadius: '10vh' }}></img>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <FooterScreen />
            <WhatsappButtonScreen />
        </>
    )
}
