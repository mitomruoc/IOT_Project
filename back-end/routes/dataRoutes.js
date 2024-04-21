import { Router } from "express";
import { newDataSensor, getDataSensor, deleteDataSensor, updateDataSensor } from "../controller/dataCtrl.js";

const dataRoutes = Router();

dataRoutes.get('/get/data', getDataSensor);
dataRoutes.post('/new/data', newDataSensor);
dataRoutes.delete('/delete/data', deleteDataSensor);
dataRoutes.put('/update/data', updateDataSensor)

export default dataRoutes;