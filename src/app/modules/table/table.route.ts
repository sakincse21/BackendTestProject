import { Router } from "express";
import { TableControllers } from "./table.contoller";

const router = Router();

router.post('/lock', TableControllers.lockTable)
router.post('/unlock', TableControllers.unlockTable)
router.get('/:tableId/status', TableControllers.getTableStatus)


export const tableRouter=router;