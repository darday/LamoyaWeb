import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { GastronomiaScreen } from './components/initialPages/GastronomiaScreen'
import { IndexScreen } from './components/initialPages/IndexScreen'
export const LaMoyaApp = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexScreen/>}/>
          <Route path="gastronomia" element={<GastronomiaScreen/>}/>
        </Routes>
      </BrowserRouter>
    )
}
