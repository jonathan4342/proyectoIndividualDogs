import React from 'react';
import { Link } from 'react-router-dom';

export const Paginado = ({razaPorPage,dogs,paginado}) => {
    let numeroDPage=[]

    for(let i=0;i<Math.ceil(dogs/razaPorPage);i++){
        numeroDPage.push(i)
    }
    
  return (
        <div>
            <ul>
                {
                    numeroDPage &&
                    numeroDPage.map(numero=>{
                        <li>
                            <a onClick={()=>paginado(numero)}>{numero}</a>
                        </li>
                    })
                }
            </ul>
        </div>
  ) 
};
