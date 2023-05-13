import express from 'express';
import bodyParser from "body-parser";

import usersRouters from './routers/users.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users',usersRouters);

app.get('/',(req, res)=>{res.send('Hello Aravind');});

app.listen(PORT,()=>console.log(`Server Running on port: http://localhost:${PORT}`));

