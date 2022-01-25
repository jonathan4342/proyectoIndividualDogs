import React,{useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {searchByName} from '../actions/Actions'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import {Dog} from './Dog'

export const SideBar = () => {

    const navigate= useNavigate()
    const location =useLocation()
    const dispatch=useDispatch();
    
    const [searchText,setSearchText]=useState('')
    
    useEffect(()=>{
    dispatch(searchByName(searchText))
    },[searchText])


    const handleInputChange=(e)=>{
        setSearchText(e.target.value)
    }


    return (
        <div className='Sidebarcontainer'>
            <form className='formConten'>
                <div className='contenedor1'>
                    <input className='input'
                        type="text"
                        placeholder='busca una raza'
                        name='searchText'
                        value={searchText}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />
                    
                    <button className='buttonSide'
                        type='submit'>
                        buscar
                    </button>
                </div>
                <div className='contenedor2'>
                    <select className="dogs" >
                        <option value="all">Todos</option>
                        <option value="allDb">Creados</option>
                        <option value="allApi">de la api</option>
                    </select>
                    <select className='Az-Dc'>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                    <select className="peso" >
                        <option value="MayorP">Mayor peso</option>
                        <option value="MenorP">Menor peso</option>
                    </select>
                </div>
                <div className='contenedor3'>
                    <Link to='/crearRaza'>
                        <button className='buttonCrear'>
                            Crear raza
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};
