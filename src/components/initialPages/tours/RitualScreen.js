import React from 'react'
import './ritual.css';

export const RitualScreen = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h1 className='text-center rit-tit'>LIMPIA TRADICIONAL</h1>
                        <div className='pant-grande'>
                            <h5 className='' style={{ textAlign: 'justify', paddingLeft:'5vh' }}>Plantas para sanación </h5>
                            <h5 className='' style={{ textAlign: 'justify', paddingLeft:'5vh' }}>Son las encargadas de devolver la salud física y espiritual, o dicho de otra forma, restaurar el equilibrio perdido. </h5>
                            <h5 className='rit-desc' style={{ textAlign: 'justify' }}>En la medicina tradicional, la limpia sirve para armonizar los espacios de experiencia de cada persona. Las limpias forman parte de la medicina tradicional andina como un principio de inicio para que cualquier tipo de tratamiento sea efectivo.</h5>
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
                        <h5 className='rit-desc' style={{ textAlign: 'justify' }}>En la medicina tradicional, la limpia sirve para armonizar los espacios de experiencia de cada persona. Las limpias forman parte de la medicina tradicional andina como un principio de inicio para que cualquier tipo de tratamiento sea efectivo.</h5>
                        <br></br>
                        <h2 className='text-center'  >Acompañanos a vivir esta maravillosa experiencia </h2>
                        <h2 className='text-center' >COSTO ADICIONAL $ 10</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
