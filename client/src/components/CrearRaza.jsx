import React from 'react';

export const CrearRaza = () => {
  return (
      <div>
          <form>
            <input 
            className='inputName'
            type='text'
            placeholder='Introduce el nombre de la raza'
            autoComplete='off'/>
            <input 
            className='inputAltura'
            type="text" 
            placeholder='Altura del perro'
            />
            <input 
            className='inputPeso'
            type="text" 
            placeholder='Peso del perro'
            />
            <input 
            className='inputAñosdeVida'
            type="text" 
            placeholder='Años de vida del perro'
            />
            <select value='temperamentos'>
              <option value="temp">temperamentos</option>
            </select>
            <button>Crear</button>
            <button>Volver</button>

            </form>
      </div>
  )
};
