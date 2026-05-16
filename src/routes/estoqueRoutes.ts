import { Router } from "express";
import EstoqueController from "../controllers/EstoqueController.js";
import { validarEstoque } from "../shared/middlewares/validarEstoque.js";

const router = Router();

router.get("/estoque", EstoqueController.listarEstoque);

router.get("/estoque/:id", EstoqueController.listarEstoquePorId);

router.post('/estoque/', validarEstoque, EstoqueController.cadastrarEstoque);

export default router;