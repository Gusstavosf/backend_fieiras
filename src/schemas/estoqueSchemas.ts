import { z } from "zod";

export const estoqueSchema = z.object({
  id_armario: z.number().int().positive({ message: "O campo Armário é obrigatório e deve ser positivo" }),

  codigo: z.string().min(1, { message: "O campo código da fieira é obrigatório" }),

  status: z.enum(['nova', 'requisição', 'morta', 'polida'], { message: "Status inválido" }),

  espessura_atual: z.number().positive({ message: "Espessura deve ser positiva" }).nullable().optional(),
  largura_atual: z.number().positive({ message: "Largura deve ser positiva" }).nullable().optional(),
  utilizacao: z.number().int().positive({ message: "Utilização deve ser positiva" }).nullable().optional(),
  producao: z.number().int().positive({ message: "Produção deve ser positiva" }).nullable().optional()
});
