import React, { useState } from 'react'
import { BannerScreen } from '../banner/BannerScreen';
import { NavBarScreen } from '../navbar/NavBarScreen';

import './Gallery.css'
// import FaWindowClose from '@mui/icons-material/Close';
import { FaWindowClose } from "react-icons/fa";


import img1 from './img/img1.jpeg';
import img2 from './img/img2.jpeg';
import img3 from './img/img3.jpeg';
import img4 from './img/img4.jpeg';
import img5 from './img/img5.jpeg';
import img6 from './img/img6.jpeg';
import img7 from './img/img7.jpeg';
import img8 from './img/img8.jpeg';
import img9 from './img/img9.jpeg';
import img10 from './img/img10.jpeg';
import img11 from './img/img11.jpeg';
import img12 from './img/img12.jpeg';
import img13 from './img/img13.jpeg';

export const GaleriaScreen = () => {
    localStorage.removeItem("menu");
    window.localStorage.setItem("menu",5);

    let data = [
      {
        id:1,
        imgSrc:img1,
      },
      {
        id:2,
        imgSrc:img2,
      },
      {
        id:3,
        imgSrc:img3,
      },
      {
        id:4,
        imgSrc:img4,
      },
      {
        id:5,
        imgSrc:img5,
      },
      {
        id:6,
        imgSrc:img6,
      },
      {
        id:7,
        imgSrc:img7,
      },
      {
        id:8,
        imgSrc:img8,
      },
      {
        id:9,
        imgSrc:img9,
      }, {
        id:10,
        imgSrc:img10,
      },
      {
        id:11,
        imgSrc:img11,
      },
      {
        id:12,
        imgSrc:img12,
      },
      {
        id:13,
        imgSrc:img13,
      },
    ]

    const [model, setmodel] = useState(false);
    const [tempimgSrc, settempimgSrc] = useState('');

    const getImg = (imgSrc) =>{
      settempimgSrc(imgSrc);
      setmodel(true);
      console.log(model, tempimgSrc);
    }

  return (
    <>
        <NavBarScreen/>
        <BannerScreen/>
        <br></br>
        <br></br>
        <div className={model? "model open":"model"} >
          <img src={tempimgSrc}/>
          <FaWindowClose onClick={()=>setmodel(false)}/>
        </div>

        <div className='gallery'>
          {data.map((item,index)=>{
            return(
              <div className='pics' key={index}>
                <img src={item.imgSrc} style={{width:'100%'}} onClick={()=>getImg(item.imgSrc)}/>
              </div>
            )
          })}
        </div>
    
    </>
  )
}
