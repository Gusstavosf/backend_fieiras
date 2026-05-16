import { Request, Response, NextFunction } from 'express';
import EstoqueService from '../services/EstoqueServices.js';
import NaoEncontrado from '../shared/errors/NaoEncontrado.js';
import RequisicaoIncorreta from '../shared/errors/RequisicaoIncorreta.js';

class EstoqueController{

  static listarEstoque = async(req: Request, res: Response, next: NextFunction) => {
    try {

      const estoque = await EstoqueService.listarEstoque();

      res.status(200).json(estoque);   
  } catch (erro) {
      next(erro)
    }
  };

  static listarEstoquePorId = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const { id } = req.params;

        const numeroId = Number(id);

        if (
          isNaN(numeroId) || 
          !Number.isInteger(numeroId) ||
          numeroId <= 0 || 
          numeroId > 2147483647
         ){
          return next(new RequisicaoIncorreta("Id inválido"));
        }

        const estoque = await EstoqueService.listarEstoquePorId(numeroId)

        if (!estoque) {
          return next(new NaoEncontrado("Fieira não encontrada."))
        }
        
        res.status(200).json(estoque);

    } catch(erro){
        next(erro);
    }
  }

  static cadastrarEstoque =  async (req: Request, res: Response, next: NextFunction) => {
    try{

      const {id_armario, codigo, status} = req.body
      
      const estoque = await EstoqueService.cadastrarEstoque(req.body);
      
      res.status(201).json(estoque);

    } catch (erro){
        next(erro)
    }
  }
}

export default EstoqueController;