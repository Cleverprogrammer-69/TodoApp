import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import tasksRoutes from './routes/tasksRoutes.js'
const app=express()
const PORT=process.env.PORT || 3000
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors("*"))
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use('/api/tasks',tasksRoutes)
mongoose.connect(process.env.MONGO_URI)
app.listen(PORT,()=>{
    console.log("Server is running on "+PORT)
})