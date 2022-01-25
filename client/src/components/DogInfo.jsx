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
                        <h1>{dogs?.data.name}</h1>
                        <img src={dogs?.data.img} alt="img not fount" width='200px' heigth='300px' />
                        <h3>Temperamentos: {dogs?.data.temperamento}</h3>
                        <h3>{dogs?.data.peso.metric} Kg</h3>
                        <h3>{dogs?.data.altura.metric} Mtrs</h3>
                        <button onClick={handleVolver}>Volver</button>
                    </>
                )
            }
        </div>
    )
};
