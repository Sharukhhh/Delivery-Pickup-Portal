import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import { sequelize } from './utils/sequalize-config.js';
import agentRoutes from './routes/agentRoutes.js';
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended : true})); 
app.use(cors());

app.use('/' , agentRoutes);


sequelize.sync({force : false})
.then(() => {
    console.log('Db and tables synced');
})
.catch((err) => {
    console.log('Error syncing db' , err);
})

sequelize.authenticate()
.then(() => {
    console.log('connected to db')
})
.catch((error) => {
    console.log('error connecting db', error);
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server on http://localhost:4000`);
})
