import mongoose from "mongoose";
const Schema=mongoose.Schema

const taskSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
},{timestamps:true})
export default mongoose.model('Task', taskSchema)