import { Router } from "express";
import { DeleteRental, FindRental, UpdateRental, addRental, getAllRentals } from "./Rental.Controller.js";
const RentalRouter=Router()
RentalRouter.post('/',addRental)
RentalRouter.put("/:id", UpdateRental);
RentalRouter.delete("/:id", DeleteRental);
RentalRouter.get("/", getAllRentals);
RentalRouter.get("/model", FindRental);
export default RentalRouter