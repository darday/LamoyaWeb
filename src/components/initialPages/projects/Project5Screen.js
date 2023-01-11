import React from 'react'
import { FooterScreen } from '../../footer/FooterScreen'
import { NavBarScreen } from '../../navbar/NavBarScreen'
import { WhatsappButtonScreen } from '../whatsappButton/WhatsappButtonScreen'

export const Project5Screen = () => {
    return (
        <>
            <NavBarScreen />
            <div className='container'>
                <div style={{ color: '#09302b' }}>
                    <h1><br></br><br></br><br></br>
                        <center><b>CLUBES DE TEATRO Y CINE EN UNIDADES EDUCATIVAS Y COMUNIDADES INDIGENAS 2007-2022</b></center>
                    </h1><br></br>
                </div>
                <div className="row" style={{ paddingBottom: '5vh' }}>
                    <div className="col-12 col-sm-12 col-md-6">
                        <h4 style={{ textAlign: 'justify' }}>
                            Los Cineclubes Kunturñawi, nacen en el año 2007, para la formación del público como la condición fundamental para niños, niñas, adolescentes, universitarios y público en general se conformen en asociaciones del público, reivindican la organización sobre las necesidades y la evolución cultural del público.
                            <br></br>
                            <br></br>
                            Actualmente los cineclubes se mantienen en las Unidades Educativas: Miguel Ángel León Pontón, Pedro
                            Vicente Maldonado, Juan de Velasco, Riobamba, Adolfo Kolping y las comunidades de Cacha Shilpalá y La Moya de Calpi.
                            <br></br>
                            <br></br>
                            El proyecto es ejecutado con jóvenes voluntarios locales e internacionales.

                        </h4>
                        
                    </div>
                    <div className="col-12 col-sm-12 col-md-6" style={{ textAlign: 'center' }}>
                        <img src={`./assets/images/projects/pro5.jpg`} width='85%' style={{ borderRadius: '10vh' }}></img>
                    </div>
                </div>
            </div>
            <br></br>
            <FooterScreen />
            <WhatsappButtonScreen />
        </>
    )
}
