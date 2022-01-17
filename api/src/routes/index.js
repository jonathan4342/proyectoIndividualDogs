const { Router } = require('express');
const {Dogs,Temperamento}=require('../db')
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs',async(req,res)=>{
    const {name}=req.query;
    if(name){
        try {
            const {data}=await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`,{
                
            })
            if(data){
                const dog=data.map(el=>{
                    return{
                        id:el.id,
                        name:el.name,
                        img:el.image.url,
                        temperamento:el.temperament,
                        años_de_vida:el.life_span,
                        peso:el.weight,
                        altura:el.height
                    }
                })  
                res.status(200).json(dog)
            }
            else{
                res.status(400).json('No se encontro el juego')
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }
    else{
        try {
            const {data}= await axios.get('https://api.thedogapi.com/v1/breeds')
            const dogs=data.map(el=>{
                return {
                    id:el.id,
                    name:el.name,
                    img:el.image.url,
                    temperamento:el.temperament,
                    años_de_vida:el.life_span,
                    peso:el.weight,
                    altura:el.height
        
                }
            })
            res.status(200).json(dogs)
            
        } catch (error) {
            res.json(error)
        }
    }
    
})


module.exports = router;
