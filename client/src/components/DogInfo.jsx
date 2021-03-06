import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { cleanActiveDog, getRazaId } from '../actions/Actions';

export const DogInfo = () => {

    const idDog = useParams().dogId;

    const navigate = useNavigate();

    const dogs = useSelector((state) => state.dogActivo);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRazaId(idDog))

    }, [])

    useEffect(() => {

        return () => {
            dispatch(cleanActiveDog())
        };
    }, []);


    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className='dogInfo'>
            {
                
                dogs && (
                        <>
                        <div className='contenedor_img'>
                         <img src={dogs?.data.img} alt="img not fount" width='350px' heigth='300px' />
                         </div>
                        <div className='contenedor_datos'>
                            <h1>{dogs?.data.name}</h1>
                            <h3>Temperamentos: {dogs?.data.temperamento}</h3>
                            <h3>Peso: {dogs?.data.peso} Kg</h3>
                            <h3>Altura: {dogs?.data.altura} cm</h3>
                            <h3>Años de vida: {dogs?.data.años_de_vida}</h3>
                            <button onClick={handleVolver}>Volver</button>
                        </div>
                   
                        </>
                        
                   
                        
                )
            }
        </div>
    )
};
