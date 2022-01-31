import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordenAz, searchByName,ordenCreados, ordenPeso, getTemperamentos, filterTemperamentos, ordenDc } from '../actions/Actions';
import { Link} from 'react-router-dom';

export const SideBar = () => {

    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('')
    
    const [select,setSelect]=useState('')

    const {temperamentos}= useSelector((state)=>state)

    useEffect(() => {
        dispatch(searchByName(searchText))
    }, [searchText])

    // useEffect(()=>{
    //     dispatch(ordenAz())
    // },[select])

    useEffect(() => {
      dispatch(getTemperamentos())
    }, []);
    
    
    const handleInputChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleOrden=(e)=>{
        if(e.target.value === 'asc'){
            dispatch(ordenAz())
        }
        else {
            dispatch(ordenDc())
        }
    }
    const handleOrdenCreados=(e)=>{
        dispatch(ordenCreados(e.target.value))
        
    }

    const handleOrdenMayor=(e)=>{
        dispatch(ordenPeso(e.target.value))
    }

    const handleFilterTemp=(e)=>{
        dispatch(filterTemperamentos(e.target.value))
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
                <div className='contenedor2' >
                    <select className="dogs" onChange={handleOrdenCreados} >
                        <option value="All">Todos</option>
                        <option value="Db">Creados</option>
                        <option value="Api">de la api</option>
                    </select>
                    <select className='Az-Dc'onChange={handleOrden}>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                    <select className="peso" onChange={handleOrdenMayor} >
                        <option value="mayor">Mayor peso</option>
                        <option value="menor">Menor peso</option>
                    </select>
                    <select className='contenedor3' defaultValue={0} onChange={handleFilterTemp}>
                        <option value={0} disabled>Temperamentos</option>
                        <option value="">Todos</option>
                        {
                            temperamentos?.map(el=>(
                                <option key={el.id} value={el.name}>{el.name}</option>
                            ))
                        }
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
