import { Router } from "express";
import { DeleteUser, FindAllUsers, FindUser, UpdateUser, addUser, login } from "./Users.Controller.js";
const UserRouter=Router()
UserRouter.post('/SignUp',addUser)
UserRouter.post('/SignIn',login)
UserRouter.put('/:id',UpdateUser)
UserRouter.delete('/:id',DeleteUser)
UserRouter.get('/',FindAllUsers)
UserRouter.get('/:id',FindUser)
export default UserRouter