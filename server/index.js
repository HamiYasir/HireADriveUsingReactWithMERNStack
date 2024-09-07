const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const {UserB, Driver, UserRequests}=require('./models/models')

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
    console.log("Driver Sign Up Request Received[POST].")
    const existingDriver=await Driver.findOne({email:req.body.email})
    const existingUser=await UserB.findOne({email:req.body.email})
    if(!existingDriver){
        if(!existingUser){
            await Driver.insertMany([req.body])
            res.json({driverExists:false, userExists:false})
        }else{
            res.json({driverExists:false, userExists:true})
        }
    }else{
        res.json({driverExists:true, userExists:false})
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

app.post("/submitUserRequest", async(req, res)=>{
    console.log("Submit User Request Recieved [POST].")
    await UserRequests.insertMany([req.body])
    res.json({submitted:true})
})

app.get("/getDetails", async(req, res)=>{
    console.log("Get Details Request Recieved [GET].")
    const userDetails=await UserB.findOne({email:req.query.email}) 
    const driverDetails=await Driver.findOne({email:req.query.email})
    if(userDetails){
        res.json({type:"user", details:userDetails})
        console.log("user triggered.")
    }
    if(driverDetails){
        res.json({type:"driver", details:driverDetails})
        console.log("driver triggered.")
    }
})

app.put("/editDriver/:email", async(req, res)=>{
    console.log("Edit Request Recieved [PUT].")
    const detail=await Driver.findOneAndUpdate({email:req.params.email}, req.body)
    console.log("Updated details of driver.[PUT]")
    res.json({edited:'true'})
})

app.put("/editUser/:email", async(req, res)=>{
    console.log("Edit Request Recieved [PUT].")
    const detail=await UserB.findOneAndUpdate({email:req.params.email}, req.body)
    console.log("Updated details of user.[PUT]")
    res.json({edited:'true'})
})