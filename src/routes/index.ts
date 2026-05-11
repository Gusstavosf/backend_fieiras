import { Router } from "express";

import estoqueRoutes from "./estoqueRoutes.js";

const router = Router();

router.use("/estoque", estoqueRoutes);

export default router;