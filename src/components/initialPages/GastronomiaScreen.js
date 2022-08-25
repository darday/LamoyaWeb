import React from 'react'
import { NavBarScreen } from '../navbar/NavBarScreen'

export const GastronomiaScreen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu",2);
  return (
    <>
        <NavBarScreen/>
        <div>Esta es la página de Gastronomia</div>
    
    </>
    )
}
