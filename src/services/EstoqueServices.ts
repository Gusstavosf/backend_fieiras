import prisma from '../config/db.js'
import { Prisma } from '@prisma/client/edge';

class EstoqueService {
    static listarEstoque = async () => {
        return prisma.estoque_fieiras.findMany({
            take: 50,
        });
    };

    static listarEstoquePorId = async (id: Number) => {
        return prisma.estoque_fieiras.findUnique({
            where: {
                id: Number(id)
            },
        });
    };

    static cadastrarEstoque = async (dados: Prisma.estoque_fieirasCreateInput) => {
        return prisma.estoque_fieiras.create({
            data: dados
        })
    }
}

export default EstoqueService