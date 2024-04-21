import { Router } from "express";
import { newAction, getDataAction, deleteAction, updateAction } from "../controller/actionCtrl.js";

const actionRoutes = Router();

actionRoutes.post('/new/action', newAction);
actionRoutes.get('/get/action', getDataAction);
actionRoutes.delete('/delete/action', deleteAction);
actionRoutes.put('/update/action', updateAction);
export default actionRoutes;