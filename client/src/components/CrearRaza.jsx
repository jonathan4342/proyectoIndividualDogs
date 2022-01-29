import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const CrearRaza = () => {

  const {temperamentos}= useSelector((state)=>state)
  
  const [input, setInput] = useState({
    name: "",
    altura: "",
    peso: "",
    años_de_vida: "",
    temperamentos: []
  })

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Introduce el nombre de la raza'
          autoComplete='off'
          value={input.name}
          onChange={(e) => {
            setInput({ ...input, name: e.target.value })
          }}
        />
        <input
          className='inputAltura'
          type="number"
          placeholder='Altura del perro'
          value={input.altura}
          onChange={(e) => {
            setInput({ ...input, altura: e.target.value })
          }}
        />
        <input
          type="number"
          placeholder='Peso del perro'
          value={input.peso}
          onChange={(e) => {
            setInput({ ...input, peso: e.target.value })
          }}
        />
        <input
          type="number"
          placeholder='Años de vida del perro'
          value={input.años_de_vida}
          onChange={(e) => {
            setInput({ ...input, años_de_vida: e.target.value })
          }}
        />
        <select className='contenedor3' defaultValue={0} onChange={(e)=>{setInput({...input,temperamentos:[...input.temperamentos,e.target.value]})}}>
          <option value={0} disabled>Temperamentos</option>
          {
            temperamentos.map(el => (
              <option key={el.id} value={el.name}>{el.name}</option>
            ))
          }
        </select>
        <button type='button' onClick={()=>console.log(input)}>Crear</button>
        <button>Volver</button>

      </form>
    </div>
  )
};
