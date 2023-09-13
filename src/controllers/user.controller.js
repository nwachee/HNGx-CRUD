import * as services from '../services/user.service.js';
import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

//Create a User
export const register = async (req, res, next) => {
  try {
     const newUser = await services.CreateUser(req.body);
    res.status(201).json({ message: 'User Registered Sucessfully', success: true, data: newUser });
  } catch (error) {
    next(error);
  }
};

//Get a Single by Name
export const findUser = async (req, res, next) => {
  try {
    let user
    // Get the ID or name from the request
  const idOrName = req.params.idOrName;
  const isValid = ObjectId.isValid(idOrName);
  if(isValid){
     user = await services.fetchUser({_id: idOrName})
  } else {
     user = await services.fetchUser({fullname: idOrName})
  }
if(!user){ return res.status(404).json({success: false, message: 'User not found'})}
return res.status(200).json({success: true,message: user})    
  } catch (error) {
    next(error)
  }
}

//Get All Users
export const findAllUser = async (req, res, next) => {
  try {
  const users = await services.fetchAll()
return res.status(200).json({
success: true, message: 'Users Fetched Successfully',data: users })
  } catch(error) {
    next(error)
  }
}

//Update User
export const updateUser = async (req, res, next) => {
  const updateData = req.body;
  try { 
const user = await services.fetchUser({_id: req.params.id});
//check user
if(!user) {
res.status(403).json({success: false, message: 'User to update not found' })
      } 
//check for existing user 
if(updateData.email){
const userUpdate = await services.fetchUser({ email: updateData.email.toLowerCase()})
if(userUpdate){
if(userUpdate._id.toString() !== id){
res.status(403).json({success: false,message: 'User already exists'})}
}
}
//update user
const updatedData = await services.updateUser(req.params.id, updateData)
res.status(200).json({success: true,message: 'User updated successfully',data: updatedData})
} 
  catch (error) {next(error);}
}

export const deleteUser = async (req, res, next) =>{
try {
//check if user exits before updating
const checkUser = await services.deleteUser({ _id: req.params.id })
if(!checkUser) return res.status(404).json({success: false,message: 'User not found'})
//delete user 
await services.deleteUser(req.params.id)
return res.status(200).json({success: true,message: 'User Deleted Successfully', data: checkUser})}
catch (error) {next(error);}
}