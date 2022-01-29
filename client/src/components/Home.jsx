//aqui deben aparecer todas mis razas 
import React from 'react';
import { useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getRazas } from '../actions/Actions';
import { Dog } from './Dog';
import { SideBar } from './SideBar';

export const Home = () => {

  const dispatch=useDispatch();
  const {filterDogs,searchDog} = useSelector((state)=>state)
  const [dogFiltered,setDogFiltered]=useState([])
  //estados para el paginado
  // const [paginaInicial,setPaginaInicial]=useState(1)
  // const [razaPorPage,setRazaPorPage]=useState(8);
  // const ultimaRazaPage=paginaInicial * razaPorPage;
  // const primeraRazaPage=ultimaRazaPage - razaPorPage;
  // const paginaActual=filterDogs.slice(ultimaRazaPage,primeraRazaPage)

  // const paginado=(numero)=>{
  //   setPaginaInicial(numero)
  // }
  
  useEffect(()=>{
    dispatch(getRazas())
  },[])
  
  useEffect(()=>{
    setDogFiltered(filterDogs)
  },[filterDogs])
  

  useEffect(()=>{
    setDogFiltered(filterDogs?.filter(el=>(el.name.toLowerCase().includes(searchDog.toLowerCase()))))
  },[searchDog])
  console.log(filterDogs)
  
  return (
    <div >
        <div className='container'>
          <SideBar />
          <div className='containerDog'>
          
          {
            dogFiltered.map(el=>{
              return(
              <div className='dog' key={el.id}>
                    <Dog id={el.id}name={el.name} img={el.img} peso={el.peso}temperamento={el.temperamento} temperamentos={el.temperamentos} />
              </div>
              )
            })
          }
          {/* <Paginado
          razaPorPage={razaPorPage}
          filterDogs={filterDogs.length}
          paginado={paginado}
          /> */}
          </div>
        </div>
    </div>
  )
};
