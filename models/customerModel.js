import {Sequelize , DataTypes} from 'sequelize';
import {sequelize} from '../utils/sequalize-config.js';

export const customer = sequelize.define('Customers' , {
    
    customerName : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    phone : {
        type : DataTypes.NUMBER,
        allowNull : false,
        unique : true
    },


});