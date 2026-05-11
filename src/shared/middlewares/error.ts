import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError.js";

export const errorMiddleware = (
    error: Error & AppError, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    console.log(error)
    return res.status(500).json('Caiu no middleware de erro')
}