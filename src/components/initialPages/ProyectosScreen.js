import React from 'react'
import { NavBarScreen } from '../navbar/NavBarScreen';

export const ProyectosScreen = () => {
    localStorage.removeItem("menu");
    window.localStorage.setItem("menu",4);
  return (
    <>
        <NavBarScreen/>
        <div>ProyectosScreen</div>
    </>
    
  )
}
