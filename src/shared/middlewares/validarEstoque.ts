import { Request, Response, NextFunction } from "express";
import {estoqueSchema}from "../../schemas/estoqueSchemas.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import { ZodError } from "zod";

export function validarEstoque(req: Request, res: Response, next: NextFunction) {
    try{
        req.body = estoqueSchema.parse(req.body)
        next()
    } catch(erro) {
        if (erro instanceof ZodError) {
            const detalhes = erro.issues.map(e => ({
                campo: e.path.join("."),
                mensagem: e.message
      }));
      return next(new RequisicaoIncorreta("Erro de validação de dados", detalhes));
    }
    next(erro);
    }
}