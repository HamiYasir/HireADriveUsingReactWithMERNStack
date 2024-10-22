const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const {UserB, Driver, UserRequests}=require('./models/models')

const app=express()
app.use(express.json())
app.use(cors())

app.listen(4000, ()=>{
    console.log("Server Started.")
})

const connect=async()=>{
    await mongoose.connect("mongodb+srv://HamiYasir:hamihami@hamicluster01.e8thkdr.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database connected.")
}

connect()

//Used to get details from both user and driver database
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

//Used to get request count from userRequests table for taskId updation
app.get('/getRequestCount', async (req, res) => {
      const count = await UserRequests.countDocuments({});
      res.json({count})
    } 
)

//Used to get details from userRequests table for drivers
app.get("/getUserRequests", async(req, res)=>{
    console.log("Get Details Request Recieved [GET].")
    const userRequests=await UserRequests.find({startingLocation:req.query.location})
    console.log(userRequests)
    res.json(userRequests);
})

//Used to make user account in the database
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

//Used to make driver signup in the database
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

//Used to login for both drivers and users
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

//Used to store incoming user requests
app.post("/submitUserRequest", async(req, res)=>{
    console.log("Submit User Request Recieved [POST].")
    const user= await UserB.findOne({email: req.body.userId})
    const existingRequest = await UserRequests.findOne({requestId: req.body.requestId})
    if(existingRequest){
        return res.status(400).json({message: "Request ID already exists."})
    }
    const completeRequest = {
        ...req.body,
        username: user.username
    }
    const request=await UserRequests.insertMany(completeRequest)
    res.json({request})
})

//Used to make edits in the driver database
app.put("/editDriver/:email", async(req, res)=>{
    console.log("Edit Request Recieved [PUT].")
    const detail=await Driver.findOneAndUpdate({email:req.params.email}, req.body)
    console.log("Updated details of driver.[PUT]")
    res.json({edited:'true'})
})

//Used to make edits in the user database
app.put("/editUser/:email", async(req, res)=>{
    console.log("Edit Request Recieved [PUT].")
    const detail=await UserB.findOneAndUpdate({email:req.params.email}, req.body)
    console.log("Updated details of user.[PUT]")
    res.json({edited:'true'})
})

//Used to accept user requests from driver
app.put("/acceptRequest/:requestId", async(req, res)=>{
    console.log("Edit Request Recieved [PUT].")
    const driver=await Driver.findOne({email: req.body.driverId})
    const existingRequest = await UserRequests.findOne({requestId: req.params.requestId})
    const completeRequest = {
        ...req.body,
        driver: driver.username
    }
    const accepted=await UserRequests.findOneAndUpdate({requestId:req.params.requestId}, completeRequest)
    console.log("Accepted customer request.[PUT]")
    res.json({edited: 'true'})
})