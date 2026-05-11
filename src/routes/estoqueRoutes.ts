import { Router } from "express";
import EstoqueController from "../controllers/EstoqueController.js";

const router = Router();

router.get("/estoque", EstoqueController.listarEstoque);

router.get("/estoque/:id", EstoqueController.listarEstoquePorId);

export default router;