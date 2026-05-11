import prisma from '../config/db.js'

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
}

export default EstoqueService