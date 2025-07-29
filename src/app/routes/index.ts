import { Router } from "express";
import { tableRouter } from "../modules/table/table.route";

const router = Router();

router.use('/tables',tableRouter);

export const appRouter = router