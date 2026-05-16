import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import Errobase from '../errors/ErroBase.js';
import RequisicaoIncorreta from '../errors/RequisicaoIncorreta.js';
import NaoEncontrado from '../errors/NaoEncontrado.js';

function manipuladorDeErros (erro: Error, req: Request, res: Response, next: NextFunction){

  if (erro instanceof Prisma.PrismaClientValidationError) {
    return new RequisicaoIncorreta().enviarResposta(res)
  }

  if (erro instanceof Prisma.PrismaClientKnownRequestError) {

    switch (erro.code) {

      case 'P2002':
        return res.status(409).json({
          message: 'Registro já existe'
        });

      case 'P2003':
        return res.status(400).json({
          message: 'Relacionamento inválido'
        });

      case 'P2025':
        return res.status(404).json({
          message: 'Registro não encontrado'
        });

      default:
        return res.status(400).json({
          message: 'Erro no banco de dados'
        });
    }
  } 
  if (erro instanceof RequisicaoIncorreta) {
    return erro.enviarResposta(res);
  }

  if (erro instanceof NaoEncontrado) {
    return erro.enviarResposta(res);
  }
  
  new Errobase().enviarResposta(res);
}

export default manipuladorDeErros;