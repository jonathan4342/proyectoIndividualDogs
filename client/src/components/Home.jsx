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
  const [currentPage, setCurrentPage]=useState(0)


  useEffect(()=>{
    dispatch(getRazas())
  },[])

  useEffect(()=>{
    setDogFiltered(filterDogs)
  },[filterDogs])
  

  useEffect(()=>{
    setDogFiltered(filterDogs?.filter(el=>(el.name.toLowerCase().includes(searchDog.toLowerCase()))))
  },[searchDog])

  const paginado= ()=>{
    return dogFiltered.slice(currentPage ,currentPage + 8)
  }

  const nextPage=()=>{
    if(filterDogs?.filter(el=>(el.name.toLowerCase().includes(searchDog.toLowerCase()))).length > currentPage + 8){
      setCurrentPage(currentPage + 8)

    }
  }

  const prevPage=()=>{

    if(currentPage > 0){
      setCurrentPage( currentPage - 8)
    }
  }
  return (
    <div >
        <div className='container'>
          <SideBar />
          <div className='botones'>
          <button  onClick={prevPage}>Anterior</button>
          <button  onClick={nextPage}>Siguiente</button>
          </div>
          <div className='containerDog'>
          {
            paginado().map(el=>{
              return(
              <div className='dog' key={el.id}>
                    <Dog id={el.id}name={el.name} img={el.img} peso={el.peso}temperamento={el.temperamento} temperamentos={el.temperamentos} />
              </div>
              )
            })
          }
          </div>
          
        </div>
    </div>
  )
};
