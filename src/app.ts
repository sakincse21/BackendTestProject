import express, { Request, Response } from "express";
import { appRouter } from "./app/routes";
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors())

app.get('/',(req:Request, res:Response)=>{
    res.status(200).json({
        message:'welcome to out server nigga'
    })
})
app.use('/api',appRouter)

export default app;