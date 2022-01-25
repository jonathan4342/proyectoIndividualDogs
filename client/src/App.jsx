
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Ladign } from './components/Ladign';
import { Home } from './components/Home';
import { DogInfo } from './components/DogInfo';
import { CrearRaza } from './components/CrearRaza';



export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Ladign/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/crearRaza' element={<CrearRaza/>}/>
        <Route path='/dog/:dogId' element={<DogInfo/>}/>
      </Routes>
    </Router>

  )
};

