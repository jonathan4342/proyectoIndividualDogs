const { DataTypes,UUIDV1 } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperamento', {
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:UUIDV1

        },
        name:{
            type:DataTypes.STRING
        }
    });
    
}