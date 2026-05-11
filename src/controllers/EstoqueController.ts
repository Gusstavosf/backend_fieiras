import { Request, Response } from 'express';
import EstoqueService from '../services/EstoqueServices.js';

class EstoqueController{

  static listarEstoque = async(req: Request, res: Response) => {
    try {
      const estoque = await EstoqueService.listarEstoque();

      res.status(200).json(estoque);   
  } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static listarEstoquePorId = async(req: Request, res: Response) => {
    try{
        const { id } = req.params;
        
        const estoque = await EstoqueService.listarEstoquePorId(Number(id))
        res.status(200).json(estoque);

    } catch(erro){
        res.status(500).json({ message: "Erro interno no servidor" });
    }
  }
}

export default EstoqueController;