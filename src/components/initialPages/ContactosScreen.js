import React from 'react'
import { NavBarScreen } from '../navbar/NavBarScreen';

export const ContactosScreen = () => {
    localStorage.removeItem("menu");
    window.localStorage.setItem("menu",5);
  return (
    <>
        <NavBarScreen/>
        <div>ContactosScreen</div>
    
    </>
  )
}
