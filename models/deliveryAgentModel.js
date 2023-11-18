import {Sequelize , DataTypes} from 'sequelize';
import {sequelize} from '../utils/sequalize-config.js';

export const agent = sequelize.define('Pickup agents', {
    
    username : {
        type : DataTypes.STRING,
        allowNull : false
    },

    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },

    phone : {
        type : DataTypes.NUMBER,
        allowNull : false,
        unique : true
    },

    password : {
        type : DataTypes.STRING,
    }
})