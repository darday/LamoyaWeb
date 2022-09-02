import React from 'react'
import { NavBarScreen } from '../navbar/NavBarScreen';

export const CuyesScreen = () => {
    localStorage.removeItem("menu");
    window.localStorage.setItem("menu",3);
    return (
      <>
          <NavBarScreen/>
          <div>Esta es la página de Cuyes</div>
      
      </>
      )
}
