import { NextFunction, Request, Response } from "express";
import { TableServices } from "./table.service";

const lockTable = (req:Request, res:Response, next:NextFunction)=>{
    const {tableId, userId, duration}= req.body;
    const result = TableServices.lockTable(tableId, userId, duration);
    res.status(result.status).json(result.response);
    next()
}
const unlockTable = (req:Request, res:Response, next:NextFunction)=>{
    const {tableId, userId}= req.body;
    const result = TableServices.unlockTable(tableId, userId);
    res.status(result.status).json(result.response);
    next()
}
const getTableStatus = (req:Request, res:Response, next:NextFunction)=>{
    const {tableId}= req.params;
    
    const result = TableServices.getTableStatus(tableId);
    res.status(result.status).json(result.response);
    next()
}

export const TableControllers={
    lockTable,
    unlockTable,
    getTableStatus
}