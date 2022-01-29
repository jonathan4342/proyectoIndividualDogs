//pasar el tipo y payload al reducer

import axios from 'axios';

export function getRazas(){
    return async function(dispatch){
        var json= await axios.get(`http://localhost:3001/dogs`)
        return dispatch({
            type:'GET_RAZA',
            payload:json.data
        })
    }
}

export function getRazaId(id){
    return async function (dispatch){
        var json=await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type:'GET_RAZAID',
            payload:json
        })
    }
}

export function cleanActiveDog(){
    return {
        type:'CLEAN_ACTIVE_DOG',

    }
}

export function searchByName(name){
    return {
        type:'SEARCH_BY_NAME',
        payload:name
    }
}

export function orderAz(){
    return {
        type:'ORDER_AZ'
    }
}

export function ordenCreados(value){
    return{
        type:'ORDEN_CREADOS',
        payload:value
    }
}

export function ordenPeso(value){
    return{
        type:'ORDEN_PESO',
        payload:value
    }
}

export function getTemperamentos(){
    return async function(dispatch){
        var json= await axios.get(`http://localhost:3001/temperament`)
        return dispatch({
            type:'TEMPERAMENTOS',
            payload:json.data
        })
    }
}

export function filterTemperamentos(value){
    return{
        type:'FILTER_TEMP',
        payload:value
    }
}

export function postRaza(raza){
    return async (dispatch)=>{
        var json= await axios.post(`http://localhost:3001/dog`,raza)
        return dispatch({
            
        })
    }
}