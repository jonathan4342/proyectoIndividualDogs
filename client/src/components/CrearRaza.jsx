import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postRaza } from '../actions/Actions';

export const CrearRaza = () => {

  const { temperamentos,filterDogs } = useSelector((state) => state)
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    alMax: "",
    alMin: "",
    altura:"",
    PMax: "",
    PMin:"",
    peso:"",
    años_de_vida: "",
    temp: []
  })

  const {alMax,alMin,PMax,PMin,temp}=input

  const handlePost=(e)=>{
    e.preventDefault();

    input.peso=`${PMin} - ${PMax}`
    input.altura=`${alMin} - ${alMax}`
    

    if(Number(alMin)>Number(alMax)){
      return alert('La altura minima no puede ser mayor a la altura maxima')
    }
    else if(Number(alMin)===Number(alMax)){
      return alert('Las alturas no pueden ser las mismas')
    }
    else if(Number(PMin)>Number(PMax)){
      return alert('El peso minimo no puede ser mayor al peso maximo')
    }
    else if(Number(PMin)===Number(PMax)){
      return alert('Los pesos no pueden ser los mismos')
    }

    let temperamentosAenviar=input.temp.map(el=>{
      return {
        name:el
      }
    })
    console.log(input)
    dispatch(postRaza({...input, temperamentos:temperamentosAenviar}))
  }

  const handleVolver = () => {
    navigate(-1)
}

console.log(temp)
  
   
  return (
    <div className='cont_'>
      <form className='cont_formulario' >
        <h3>Nombre de la raza</h3>
        <input
          type='text'
          required
          placeholder='Introduce el nombre de la raza'
          autoComplete='off'
          value={input.name}
          onChange={(e) => {
            setInput({ ...input, name: e.target.value })
          }}
        />
        <div>
          <h3>Altura</h3>
          <input
            className='inputAltura'
            type="number"
            required
            placeholder='Min'
            value={input.alMin}
            onChange={(e) => {
              setInput({ ...input, alMin: e.target.value })
            }}
          />
          <input
            className='inputAltura'
            type="number"
            required
            placeholder='Max'
            value={input.alMax}
            onChange={(e) => {
              setInput({ ...input, alMax: e.target.value })
            }}
          />
        </div>
        <div>
          <h3>Peso</h3>
          <input
            type="number"
            required
            placeholder='Min'
            value={input.PMin}
            onChange={(e) => {
              setInput({ ...input, PMin: e.target.value })
            }}
          />
          <input
            type="number"
            required
            placeholder='Max'
            value={input.PMax}
            onChange={(e) => {
              setInput({ ...input, PMax: e.target.value })
            }}
          />
        </div>
        <h3>Años de vida</h3>
        <input
          type="number"
          required
          placeholder='Años de vida del perro'
          value={input.años_de_vida}
          onChange={(e) => {
            setInput({ ...input, años_de_vida: e.target.value })
          }}
        />
        <div className='select_tem'>
          <h3>Elegir temperamentos</h3>
          <select className='contenedor3' defaultValue={0} onChange={(e) => { setInput({ ...input, temp: [...input.temp,e.target.value] }) }}>
            <option value={0} disabled>Temperamentos</option>
            {
              temperamentos.map(el => (
                <option key={el.id} value={el.name}>{el.name}</option>
              ))
            }
          </select>
          <div>
          {
            
            temp.map(el=>(
              <button key={el} >{el}</button>
            ))
           
          }
          </div>
        </div>
        <button type='button' onClick={handlePost}>Crear</button>
        <button onClick={handleVolver}>Volver</button>
      </form>
    </div>
  )
};
