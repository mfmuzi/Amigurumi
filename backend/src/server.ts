import cors from "cors";
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { router } from "./routes";
import 'express-async-errors';

createConnection().then(connection => {
    
    const app = express();
    
    app.use(cors());
    
    app.use(express.json());
    app.use(router)
    
    app.listen(5000, () => {
        console.log('Server on port: 5000')
    })
}).catch((error) =>{
    console.log("Unable to connect to the database", error)
  });
