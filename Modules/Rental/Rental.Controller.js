import { ObjectId } from "mongodb";
import { db } from "../../Databases/dbConnection.js";

const addRental = async(req, res) => {
  let Rental =await db.collection("Rentals").insertOne(req.body);
  res.status(201).json({ message: "Success", Rental });

};
const getAllRentals = async(req, res) => {
    let Rental =await db.collection("Rentals").find().toArray();
    res.status(201).json({ message: "Success", Rental });
  
  };
const FindRental = async(req, res) => {
    let Rental =await db.collection("Rentals").find({_id:new ObjectId(req.params.id)}).toArray();
    res.status(201).json({ message: "Success", Rental });
  
  };
const DeleteRental = async(req, res) => {
    let Rental =await db.collection("Rentals").deleteOne({_id:new ObjectId(req.params.id)});
    res.status(201).json({ message: "Success", Rental });
  
  };
const UpdateRental = async(req, res) => {
    let Rental =await db.collection("Rentals").updateOne({_id:new ObjectId(req.params.id)},{$set:req.body});
    res.status(201).json({ message: "Success", Rental });
  
  };
export { addRental ,getAllRentals,FindRental,DeleteRental,UpdateRental};
