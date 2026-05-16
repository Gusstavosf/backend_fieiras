import { Response, Request, NextFunction } from "express";
import NaoEncontrado from "../errors/NaoEncontrado.js";

function manipulador404(req: Request, res: Response, next: NextFunction){
    const erro404 = new NaoEncontrado();
    next(erro404)
}

export default manipulador404;