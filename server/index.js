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
    const existingDriver=await Driver.findOne({email:req.body.email})
    if(!existingUser){
        if(!existingDriver){
            await UserB.insertMany([req.body])
            res.json({userExists:false, driverExists:false})
        }else{
            res.json({userExists:false, driverExists:true})
        }
    }else{
        res.json({userExists:true, driverExists:false})
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

app.post("/login", async(req, res)=>{
    console.log("Login Request Received[POST].")
    const user=await UserB.findOne({email:req.body.email})
    const driver=await Driver.findOne({email:req.body.email})
    if(!driver){
        if(!user){
            res.json({doesExist:false})
        }else{
            if(user.password===req.body.password){
                res.json({doesExist:true, passwordCheck:true})
            }else{
                res.json({doesExist:true, passwordCheck:false})
            }
        }
    }else{
        if((driver.password===req.body.password)){
            res.json({doesExist:true, passwordCheck:true})
        }else{
            res.json({doesExist:true, passwordCheck:false})
        }
    }
})

app.get("/getDetails", async(req, res)=>{
    console.log("Get Details Request Recieved [GET].")
    const userDetails=await UserB.findOne({email:req.query.email}) 
    const driverDetails=await Driver.findOne({email:req.query.email})
    if(userDetails && !driverDetails){
        res.json({type:"user", details:userDetails})
        console.log("user")
    }else if(!userDetails && driverDetails){
        res.json({type:"driver",details:driverDetails})
        console.log("driver")
    }else if(userDetails && driverDetails){
        res.json({type:"IMPOSSIBLE",details:{username:null}})
    }else{
        res.json({type:"Nothing fetched",details:{username:null}})
    }
})
