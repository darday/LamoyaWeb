import React from 'react'
import './ritual.css';

export const RitualScreen = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h1 className='text-center rit-tit'>RITUAL DE PURIFICACIÓN</h1>
                        <div className='pant-grande'>
                            <h5 className='rit-desc' style={{ textAlign: 'justify' }}>Este ritual milenario, que en el pasado lo hacían solo los nativos tsáchilas, hoy es solicitado por mestizos y extranjeros. “Lo hacen como una forma de revestirse de buena suerte en la víspera de un año que finaliza”, explica Aguavil</h5>
                            <br></br>
                            <h2 className='text-center'  >Acompañanos a vivir esta maravillosa experiencia </h2>
                            <h2 className='text-center' >COSTO ADICIONAL $10</h2>
                        </div>

                        <div className='pant-peque col-12 col-md-6'>
                            <img src={`./assets/images/paquetes/limpia.jpeg`} style={{ borderRadius: '10vh' }} className='' width="100%" height='auto'></img>
                        </div>

                    </div>
                    <div className='pant-grande col-12 col-md-6'>
                        <img src={`./assets/images/paquetes/limpia.jpeg`} style={{ borderRadius: '10vh' }} className='' width="100%" height='auto'></img>
                    </div>

                    <div className='pant-peque'>
                        <h5 className='rit-desc' style={{ textAlign: 'justify' }}>Este ritual milenario, que en el pasado lo hacían solo los nativos tsáchilas, hoy es solicitado por mestizos y extranjeros. “Lo hacen como una forma de revestirse de buena suerte en la víspera de un año que finaliza”, explica Aguavil</h5>
                        <br></br>
                        <h2 className='text-center'  >Acompañanos a vivir esta maravillosa experiencia </h2>
                        <h2 className='text-center' >COSTO ADICIONAL $10</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
