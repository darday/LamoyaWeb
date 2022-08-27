import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { GastronomiaScreen } from './components/initialPages/GastronomiaScreen'
import { IndexScreen } from './components/initialPages/IndexScreen'
import { IndexPack1Screen } from './components/initialPages/IndexPack1Screen'
import { IndexPack2Screen } from './components/initialPages/IndexPack2Screen'
export const LaMoyaApp = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexScreen/>}/>
          <Route path="gastronomia" element={<GastronomiaScreen/>}/>
          <Route path="pack1" element={<IndexPack1Screen/>}/>
          <Route path="pack2" element={<IndexPack2Screen/>}/>
        </Routes>
      </BrowserRouter>
    )
}
