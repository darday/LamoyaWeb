import React from 'react'
import { NavBarScreen } from '../navbar/NavBarScreen'

export const EconomyScreen = () => {
    localStorage.removeItem("menu");
    window.localStorage.setItem("menu",7);
  return (
      <>
        <NavBarScreen/>
      </>
    )
}
