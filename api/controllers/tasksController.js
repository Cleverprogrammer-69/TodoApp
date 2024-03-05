import mongoose from 'mongoose';
import Task from '../models/tasksModel.js';
import validator from 'validator';
export const getAllTasks = async(req,res)=>{
    try {
        const tasks=await Task.find({}).sort({createdAt: -1})
       return res.status(200).json(tasks);
    } catch (error) {
       return res.status(500).json({error: error.message});
    }
   
}
export const getOneTask = async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:"No such task"})
   try {
    const task=await Task.findById({_id:id})
    if(!task){
        return res.status(404).json({error: "Task not found"})
    }
    return res.status(200).json(task)
   } catch (error) {
    return res.status(500).json({error: error.message})
   }
}
export const createTask = async (req, res) => {
    const {name, isCompleted, description}=req.body
    if(!name || !description) return res.status(404).json({error: "All fields must be filled"})
    try {
        const task = await Task.create({name, description,isCompleted})
       return res.status(200).json(task);
    } catch (error) {
       return res.status(500).json({error: error.message})
    }
};
export const updateTask = async (req, res) => {
    const {id}=req.params
    const {name, description, isCompleted}= req.body
    if (!name || !description){
        return res.status(404).json({ error: "All fields must be filled" });
    }
    if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).json({error:"No such task"})
    try {
        const task= await Task.findOneAndUpdate({_id:id},{
            ...req.body
        })
        if(!task){
            return res.status(404).json({error:"No such task"})
        }
        return res.status(200).json(task)
    } catch (error) {
       return res.status(500).json({error: error.message})
    }
};
export const deleteTask = async (req, res) => {
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).json({error:"No such task"})
    try {
        const task= await Task.findOneAndDelete({_id:id})
        if(!task){
            return res.status(404).json({error:"No such task"})
        }
        return res.status(200).json(task)
    } catch (error) {
       return res.status(500).json({error: error.message})
    }
};