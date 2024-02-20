const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const {UserB, Driver}=require('./models/models')

const app=express()
app.use(express.json())
app.use(cors())

app.listen(4000, (res, req)=>{
    console.log("Server Started.")
})

const connect=async()=>{
    await mongoose.connect("mongodb+srv://HamiYasir:hamihami@hamicluster01.e8thkdr.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database connected.")
}

connect()

app.post("/userSignup", async(req, res)=>{
    console.log("User Sign Up Request Received[POST].")
    const existingUser=await UserB.findOne({email:req.body.email})
    if(!existingUser){
        await UserB.insertMany([req.body])
        res.json({userExists:false})
    }else{
        res.json({userExists:true})
    }
})

app.post("/driverSignup", async(req, res)=>{
    console.log("Driver Sign Up Request Received[POST].");
    const existingDriver=await Driver.findOne({email:req.body.email})
    if(!existingDriver){
        await Driver.insertMany([req.body])
        res.json({driverExists:false})
    }else{
        res.json({driverExists:true})
    }
})