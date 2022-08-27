import React from 'react'
import { CarouselScreen } from '../carousel/CarouselScreen'
import { NavBarScreen } from '../navbar/NavBarScreen'
import { useHistory } from 'react-router-dom'

export const IndexPack2Screen = () => {
  // const history = useHistory();
  // const handleClick = () => history.push('/Pack1');
  return (
    <>
        <NavBarScreen/>
        

        <div>
          <img src= { `./assets/img/index12.jpeg` } width="100%" height= 'auto'></img>
        </div> 

        <center><img src= { `./assets/img/index13.png` } className='paquetemoya' width="45%" height= 'auto'></img></center> 
    </>
  )
}
