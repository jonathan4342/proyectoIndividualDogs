import React from 'react';
import { Link } from 'react-router-dom';


export const Dog = ({id,name,img,temperamento,peso,temperamentos}) => {

  
    
  return (
    <div>
      <Link to={`/dog/${id}`}>
        <h2>{name}</h2>
      </Link>
        <img src={img} alt="img not fount" width='200px' heigth='300px' />
        {
          temperamento?
          (
            <h3>Temperamentos: {temperamento}. </h3>
          )
          :
          (
            <h3>Temperamentos: {temperamentos?.map(el=>el.name +", ")}</h3>
          )
        }
        <h3>Peso: {peso} Kg</h3>
        
    </div>
  )
};
