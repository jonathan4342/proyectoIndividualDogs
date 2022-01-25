const { Router } = require('express');
const {Dog,Temperamento}=require('../db')
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs',async(req,res)=>{
    const {raza}=req.query;
        try {
            const {data}=await axios.get(`https://api.thedogapi.com/v1/breeds`)
            
                let allDogs=data.map(el=>{
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
                if(raza){
                    allDogs=allDogs.find(el=>(el.name.includes(raza)))
                    if(!allDogs){
                        return res.json('No existe la raza')
                    }
                    return res.status(200).json(allDogs)
                }
                else{
                    res.json(allDogs)
                }
                
                
        } catch (error) {
            console.log(error)
        }
   
})

router.get('/dogs/:idRaza',async (req,res)=>{
    const {idRaza}=req.params
    console.log(idRaza)
     try {
            const {data}=await axios.get(`https://api.thedogapi.com/v1/breeds`)
            
                let allDogs=data.map(el=>{
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
                 
                 allDogs=allDogs.find(el=>(el.id===Number(idRaza)))
                 res.status(200).json(allDogs)
    }          
        catch(error){
            res.json(`Error:${error.message}`)
        }
})

router.get('/temperament',async (req,res)=>{
    try {
            const {data}=await axios.get(`https://api.thedogapi.com/v1/breeds`)
            
                let allDogs=data.map(el=>{
                    return {
                        temperamento:el.temperament
                    }
                })
                let temperament=[]

                allDogs.forEach(el => {
                    if(!temperament.includes(el.temperamento)){
                        temperament.push(el.temperamento)
                    }
                });
                temperament=temperament.join(' ').split(' ')
                temperament=temperament.filter((item,index)=>{
                    return temperament.indexOf(item)===index
                })
                temperament=temperament.map(el=>{
                    return{
                        name:el.replace(',','')
                    }
                })
                  const addTemp = await Temperamento.bulkCreate(temperament)
                
                res.json(addTemp)
    }catch(error){
        res.json(`Error:${error.message}`)
    }          
    
})

router.post('/dog',async(req,res)=>{
    const{name,altura,peso,años_de_vida,temperamento}=req.body;
    try {
        const newRaza=await Dog.create({
        name,
        altura,
        peso,
        años_de_vida,
        temperamento,
        
    })
    const tempDb=await Temperamento.findAll({
        where:{
            name:temperamento
        }
    })
    await newRaza.addTemperamento(tempDb)
    res.status(201).json('Raza creada correctamente')

    } catch (error) {
        res.json(`Error:${error.message}`)
    }
    
})
module.exports = router;
