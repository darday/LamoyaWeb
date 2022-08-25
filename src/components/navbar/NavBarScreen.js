import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaHome } from "react-icons/fa";

import styled from 'styled-components'
import { BurguerButon } from './BurguerButon'

export const NavBarScreen = () => {

    const [clicked, setclicked] = useState(false);

    const handleClick = ()=>{
        setclicked(!clicked);
    }

    const menuSeleccionado=(opcion)=>{
      switch (opcion) {
        case 1:
          localStorage.removeItem("menu");
          window.localStorage.setItem("menu",1);
          break;
        case 2:
          localStorage.removeItem("menu");
          window.localStorage.setItem("menu",2);
          break;
        
        case 3:
          localStorage.removeItem("menu");
          window.localStorage.setItem("menu",3);
          break;

        case 4:
          localStorage.removeItem("menu");
          window.localStorage.setItem("menu",4);
          break;

        case 5:
          localStorage.removeItem("menu");
          window.localStorage.setItem("menu",5);
          break;
      
        default:
          break;
      }
  }


  return (
        <>
            <NavContainer>
                <h2>La <span>Moya</span></h2>
                <div className={`links ${clicked ?'active':''}`}>
                    {/* <a className='selection-word' href='/'><FaHome/> Inicio</a> */}
                    <a className={`selection-word ${(localStorage.getItem("menu")==1)  && 'color-seleccionado'} `} href='/' onClick={()=>menuSeleccionado(1)} > Inicio</a>
                    <a className={`selection-word ${(localStorage.getItem("menu")==2)  && 'color-seleccionado'} `} href='/gastronomia'  onClick={()=>menuSeleccionado(2)} >Gastronomia</a>                    <a className='selection-word' href='/'>Cuyes</a>
                    <a className='selection-word' href='/'>Proyectos</a>
                    <a className='selection-word' href='/'>Galeria</a>
                    <a className='selection-word' href='/'>Contactos</a>
                </div>
                <div className='burguer'>
                    <BurguerButon clicked={clicked} handleClick={handleClick}/>
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>

            </NavContainer>
        </>
    )
}

const NavContainer = styled.nav`
h2{
    color: rgb(19 76 65);
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding-left: 7% !important;
  padding-right: 7% !important;
  padding: 1rem;
  background-color: rgb(246 235 229);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: rgb(19 76 65);
    text-decoration: none;
    margin-right: 1rem;
  }
  
  a:hover.selection-word{
    color:#ee833b !important
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: rgb(19 76 65);
      font-size: 1rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: rgb(19 76 65);
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    z-index: 2;
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 12%;
    left: 32%;
    right: 0;
    text-align: center;
    a{
      font-size: 1rem;
      margin-top: 0.3rem;
      color: rgb(19 76 65);
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: rgba(246, 235, 229, 0.673);
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    z-index: 1;
    border-radius: 0 0 0 80%;
    top: 0;
    left: 0;
    width: 100%;
    height: 42%;
  }
`