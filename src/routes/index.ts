import { Router } from "express";

import estoqueRoutes from "./estoqueRoutes.js";

const router = Router();

router.use("/", estoqueRoutes);

export default router;