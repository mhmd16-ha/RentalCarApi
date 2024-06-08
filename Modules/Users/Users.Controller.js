import { ObjectId } from "mongodb";
import { db } from "../../Databases/dbConnection.js";

const addUser = async (req, res) => {
  let user = await db.collection("Users").insertOne(req.body);
  res.status(201).json({ message: "Success", user });
};
const login = async (req, res) => {
  const users = await db.collection("Users").find({Email:req.body.Email ,Password:req.body.Password}).toArray();
  if(users.length!=0){
    res.status(201).json({ message: "Login success" });
    
  }
  else{
    res.json({ message: "Faild" });
  }
};
const UpdateUser = async (req, res) => {
  let user = await db
    .collection("Users")
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
  res.status(201).json({ message: "Success", user });
};
const DeleteUser = async (req, res) => {
  await db.collection("Users").deleteOne({ _id: new ObjectId(req.params.id) });
  res.status(201).json({ message: "Success" });
};
const FindAllUsers = async (req, res) => {
  const users = await db.collection("Users").find().toArray();
  res.status(201).json({ message: "Success", users });
};
const FindUser = async (req, res) => {
  const users = await db
    .collection("Users")
    .find({ _id: new ObjectId(req.params.id) })
    .toArray();
  res.status(201).json({ message: "Success", users });
};
export { addUser, UpdateUser, DeleteUser, FindAllUsers, FindUser, login };
