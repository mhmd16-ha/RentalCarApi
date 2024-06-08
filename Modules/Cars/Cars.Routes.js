import { Router } from "express";
import { DeleteCar, FindAvailableOfSpecificModel, FindCar, FindQuery, FindRentedOfSpecificModel, UpdateCar, addCar, getAllCars } from "./Cars.controller.js";
const CarRouter=Router()
CarRouter.post('/',addCar)
CarRouter.get('/model', FindQuery);
CarRouter.get('/available', FindAvailableOfSpecificModel);
CarRouter.get('/rented', FindRentedOfSpecificModel);
CarRouter.put("/:id", UpdateCar);
CarRouter.delete("/:id", DeleteCar);
CarRouter.get("/", getAllCars);
CarRouter.get("/:id", FindCar);
export default CarRouter