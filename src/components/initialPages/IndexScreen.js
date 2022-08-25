import React from 'react'
import { CarouselScreen } from '../carousel/CarouselScreen'
import { NavBarScreen } from '../navbar/NavBarScreen'

export const IndexScreen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu",1);
  return (
    <>
        <NavBarScreen/>
        <CarouselScreen/>
        <h1>IndexScreen</h1>
        <h1>IndexScreen</h1>
    </>
  )
}
