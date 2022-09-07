import React from 'react'
import { FooterScreen } from '../footer/FooterScreen';
import { MapsScreen } from '../Maps/MapsScreen';
import { NavBarScreen } from '../navbar/NavBarScreen';

export const ContactosScreen = () => {
    localStorage.removeItem("menu");
    window.localStorage.setItem("menu",6);
  return (
    <>
        <NavBarScreen/>
        <div className='container' style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
          <div className='row'>
            <div className='col-12 col-sm-6' style={{paddingBottom:'5vh'}}>
              <h1 className='titulos-grandes-directora' style={{ color:'#4d5480' }}>CONTACTOS</h1>
                <div style={{ textAlign: 'justify', paddingTop: '5vh', paddingBottom: '3vh', color: '#666666', fontSize: '1rem' }}>
                  Estamos ubicados a 20 minutos de la ciudad de Riobamba
                </div>
                <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1rem' }}>
                  <b>Reservaciones:</b>  <a href= 'https://walink.co/f3a001' target="_blank" style={{textDecoration:'none', color:'gray'}} className="selection-word" >+593 998752686</a>
                </div>
                <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1rem' }}>
                  <b>Operaciones:</b>  <a href= 'https://walink.co/9e2e79' target="_blank" style={{textDecoration:'none', color:'gray'}} className="selection-word">+593 987608055</a>
                </div>
                <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1rem' }}>
                  <b>Link contacto directo:</b> <a href= 'https://walink.co/f3a001' target="_blank" style={{textDecoration:'none', color:'gray'}} className="selection-word">Click Aquí!</a> 
                </div>
                <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1rem' }}>
                  <b>Facebook:</b> <a href= 'https://www.facebook.com/lamoya.moya.98' target="_blank" style={{textDecoration:'none', color:'gray'}} className="selection-word">Comuna La Moya</a>
                </div>
                <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1rem' }}>
                  <b>Email:</b> comuna_lamoya@hotmail.com
                </div> 
            </div>
            <div className='col-12 col-sm-6'  width='50%'>
              
              <h1 className='titulos-grandes-directora' style={{ color:'#4d5480' }}>UBICACIÓN</h1>
                <MapsScreen/>
            </div>
          </div>
        </div>

        <div className='container contacts-form'>
          <h1 className='text-center'>Ponte en contacto, Escríbenos!</h1>
          <br></br>

          <form style={{paddingBottom:'10vh'}}>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-6'>
                <div className="mb-3">
                  <label  className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" required></input>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                </div>
              </div>
            </div>
            <div className=''> 
            <div class="mb-3">
              <label  class="form-label">Escribe aquí tu mensaje:</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
            </div>
            </div>
            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
          </form>
        </div>


        <FooterScreen/>    
    </>
  )
}
