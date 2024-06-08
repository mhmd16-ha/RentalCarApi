import { ObjectId } from "mongodb";
import { db } from "../../Databases/dbConnection.js";

const addCar = async(req, res) => {
  let car =await db.collection("Cars").insertOne(req.body);
  res.status(201).json({ message: "Success", car });

};
const getAllCars = async(req, res) => {
    let car =await db.collection("Cars").find().toArray();
    res.status(201).json({ message: "Success", car });
  
  };
const FindCar = async(req, res) => {
    let car =await db.collection("Cars").find({_id:new ObjectId(req.params.id)}).toArray();
    res.status(201).json({ message: "Success", car });
  
  };
  const FindQuery =async (req, res) => {
    let car =await db.collection("Cars").find({ name: req.query.name }).toArray();
    res.json({ message: "Success" ,car});
  };
  
  const FindAvailableOfSpecificModel =async (req, res) => {
    let car =await db.collection("Cars").find({ Model: req.query.Model ,rentedStatus:"Available" }).toArray();
    res.json({ message: "Success" ,car});
  };
  const FindRentedOfSpecificModel =async (req, res) => {
    let car =await db.collection("Cars").find({ Model: req.query.Model ,rentedStatus:"Rented" }).toArray();
    res.json({ message: "Success" ,car});
  };
const DeleteCar = async(req, res) => {
    let car =await db.collection("Cars").deleteOne({_id:new ObjectId(req.params.id)});
    res.status(201).json({ message: "Success", car });
  
  };
const UpdateCar = async(req, res) => {
    let car =await db.collection("Cars").updateOne({_id:new ObjectId(req.params.id)},{$set:req.body});
    res.status(201).json({ message: "Success", car });
  
  };
export { addCar ,getAllCars,FindCar,DeleteCar,UpdateCar,FindQuery,FindAvailableOfSpecificModel,FindRentedOfSpecificModel};
