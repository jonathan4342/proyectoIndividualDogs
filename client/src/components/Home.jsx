//aqui deben aparecer todas mis razas 
import React from 'react';
import { useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getRazas } from '../actions/Actions';
import { Link } from 'react-router-dom';
import { Dog } from './Dog';
import { SideBar } from './SideBar';

export const Home = () => {

  const dispatch=useDispatch();
  const {dogs,searchDog} = useSelector((state)=>state)

  const [dogFiltered,setDogFiltered]=useState([])
  
  useEffect(()=>{
    dispatch(getRazas())
  },[])
  
  useEffect(()=>{
    setDogFiltered(dogs)
  },[dogs])
  

  useEffect(()=>{
    setDogFiltered(dogs?.filter(el=>(el.name.toLowerCase().includes(searchDog.toLowerCase()))))
  },[searchDog])

  return (
    <div >
        <div className='container'>
          <SideBar />
          <div className='containerDog'>
          {
            dogFiltered.map(el=>{
              return(
              <div className='dog' key={el.id}>
                    <Dog id={el.id}name={el.name} img={el.img} peso={el.peso}temperamento={el.temperamento} />
              </div>
              )
            })
          }

          </div>
        </div>
    </div>
  )
};
