import prisma from "../config/db.js";

class EstoqueController{

  static listarEstoque = async(req, res) => {
    try {
      const estoque = await prisma.estoque_fieiras.findMany({
         take: 50
      })
      res.status(200).json(estoque);
      
  } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static listarEstoquePorId = async(req, res) => {
    try{
        const { id } = req.params;
        
        const estoque = await prisma.estoque_fieiras.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(estoque);

    } catch(erro){
        res.status(500).json({ message: "Erro interno no servidor" });
    }
  }
}

export default EstoqueController;