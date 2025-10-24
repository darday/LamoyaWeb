import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { GastronomiaScreen } from './components/initialPages/GastronomiaScreen'
import { IndexScreen } from './components/initialPages/IndexScreen'
import { IndexPack1Screen } from './components/initialPages/IndexPack1Screen'
import { IndexPack2Screen } from './components/initialPages/IndexPack2Screen'
import { ContactosScreen } from './components/initialPages/ContactosScreen'
import { CuyesScreen } from './components/initialPages/CuyesScreen'
import { ProyectosScreen } from './components/initialPages/ProyectosScreen'
import { GaleriaScreen } from './components/gallery/GaleriaScreen'
import { EconomyScreen } from './components/initialPages/EconomyScreen'
import { Project1Screen } from './components/initialPages/projects/Project1Screen'
import { Project2Screen } from './components/initialPages/projects/Project2Screen'
import { Project3Screen } from './components/initialPages/projects/Project3Screen'
import { Project4Screen } from './components/initialPages/projects/Project4Screen'
import { Project5Screen } from './components/initialPages/projects/Project5Screen'
import { Project6Screen } from './components/initialPages/projects/Project6Screen'
import { Project7Screen } from './components/initialPages/projects/Project7Screen'
import CentroIScreen from './components/initialPages/CentroIScreen'
import PremiosScreen from './components/initialPages/PremiosScreen'
export const LaMoyaApp = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexScreen/>}/>
          <Route path="restaurante" element={<GastronomiaScreen/>}/>
          <Route path="artesania" element={<EconomyScreen/>}/>
          <Route path="cuyes" element={<CuyesScreen/>}/>
          <Route path="proyectos" element={<ProyectosScreen/>}/>
          <Route path="galeria" element={<GaleriaScreen/>}/>
          <Route path="contactos" element={<ContactosScreen/>}/>
          <Route path="proyecto1" element={<Project1Screen/>}/>
          <Route path="proyecto2" element={<Project2Screen/>}/>
          <Route path="proyecto3" element={<Project3Screen/>}/>
          <Route path="proyecto4" element={<Project4Screen/>}/>
          <Route path="proyecto5" element={<Project5Screen/>}/>
          <Route path="proyecto6" element={<Project6Screen/>}/>
          <Route path="proyecto7" element={<Project7Screen/>}/>
          <Route path="pack1" element={<IndexPack1Screen/>}/>
          <Route path="pack2" element={<IndexPack2Screen/>}/>
          <Route path="interpretacion" element={<CentroIScreen/>}/>
          <Route path="premios" element={<PremiosScreen/>}/>
        </Routes>
      </BrowserRouter>
    )
}
