import React from 'react'
import { FooterScreen } from '../../footer/FooterScreen'
import { NavBarScreen } from '../../navbar/NavBarScreen'
import { WhatsappButtonScreen } from '../whatsappButton/WhatsappButtonScreen'

export const Project7Screen = () => {
    return (
        <>
            <NavBarScreen />
            <div className='container'>
                <div style={{ color: '#09302b' }}>
                    <h1><br></br><br></br><br></br>
                        <center><b>REVITALIZACIÓN CULTURAL EN OZOGOCHE - 2002 - 2015: </b></center>
                    </h1><br></br>
                </div>
                <div className="row" style={{ paddingBottom: '5vh' }}>
                    <div className="col-12 col-sm-12 col-md-6">
                        <h4 style={{ textAlign: 'justify' }}>
                            El proyecto dio inicio en marzo del año 2002, y tiene dos fases: proceso de formación artística, artesanal y gastronómica a las comunidades indígenas de la zona de Ozogoche, integradas en la Coporacion Zula y Ucisa y la segunda fase: el Festival Internacional de Culturas Vivas Tributo de las Aves Cuvivis en Ozogoche”.  La Fundación lideró este proceso hasta el año 2015, año transferido a las organizaciones indígenas, quienes lo vienen ejecutando hasta el año 2022.
                        </h4>

                    </div>
                    <div className="col-12 col-sm-12 col-md-6" style={{ textAlign: 'center' }}>
                        <img src={`./assets/images/projects/pro7.jpg`} width='85%' style={{ borderRadius: '10vh' }}></img>
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
