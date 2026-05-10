import express from "express";
import EstoqueController from "../controllers/EstoqueController.js";

const router = express.Router();

router
  .get("/estoque", EstoqueController.listarEstoque)
  .get("/estoque/:id", EstoqueController.listarEstoquePorId)

export default router;   