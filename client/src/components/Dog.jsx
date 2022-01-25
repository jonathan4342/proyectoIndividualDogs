import React from 'react';
import { Link } from 'react-router-dom';


export const Dog = ({id,name,img,temperamento,peso}) => {

    
  return (
    <div>
      <Link to={`/dog/${id}`}>
        <h2>{name}</h2>
      </Link>
        <img src={img} alt="img not fount" width='200px' heigth='300px' />
        <h3>Temperamentos: {temperamento}. </h3>
        <h3>Peso: {peso.metric} Kg</h3>
        
    </div>
  )
};
