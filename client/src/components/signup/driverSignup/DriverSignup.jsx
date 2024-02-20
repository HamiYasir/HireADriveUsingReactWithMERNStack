import React, {useState} from "react"
import {Box, Input, Stack, Button, InputLabel, TextareaAutosize, Select, MenuItem} from "@mui/material"
import styles from "./driverSignup.module.css"
import defaultImage from "../../pictures/default_profile_pic_1.jpeg"
import axios from "axios"
import firebase from "firebase/compat/app"
import "firebase/compat/storage"

const DriverSignup=()=>{
  const [profileURL, setProfileURL]=useState("")
  const [username, setUsername]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [confirmPassword, setConfirmPassword]=useState("")
  const [dateOfBirth, setDateOfBirth]=useState("")
  const [district, setDistrict]=useState("default")
  const [vehicle, setVehicle]=useState("default")
  const [address, setAddress]=useState("")
  const [imageURL, setImageURL]=useState(defaultImage)
  const [selectedFile, setSelectedFile]=useState(null)

  const handleImageChange=(event)=>{
    const file=event.target.files[0];
    setSelectedFile(file)
    if(file){
      const reader=new FileReader()
      reader.onload=()=>{
        setImageURL(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const uploadImageAndDownloadURL=async()=>{
    if(selectedFile){
      const storageRef=firebase.storage().ref()
      const fileRef=storageRef.child(selectedFile.name)

      await fileRef.put(selectedFile)
      const downloadURL=await fileRef.getDownloadURL()
      setProfileURL(downloadURL)   
    }else{
      alert("No profile picture selected. Please select a profile picture.")
    }
  }

  const handleUsername=(event)=>{
    setUsername(event.target.value)
  }

  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }

  const handlePassword=(event)=>{
    setPassword(event.target.value)
  }

  const handleConfirmPassword=(event)=>{
    setConfirmPassword(event.target.value)
  }

  const handleDateOfBirth=(event)=>{
    setDateOfBirth(event.target.value)
  }

  const handleDistrict=(event)=>{
    setDistrict(event.target.value)
  }

  const handleVehicle=(event)=>{
    setVehicle(event.target.value)
  }

  const handleAddress=(event)=>{
    setAddress(event.target.value)
  }

  const signup=async()=>{
    if(username!=="" && email!=="" && password!=="" && confirmPassword!=="" && dateOfBirth!=="" && district!=="default" && vehicle!=="default" && address!==""){
      if(password===confirmPassword){
        uploadImageAndDownloadURL()
        if(profileURL!==""){
          const submit=await axios.post("http://localhost:4000/driverSignup", {profilePic:profileURL, username:username, email:email, password:password, dateOfBirth:dateOfBirth, district:district, address:address})
          if(submit.data.driverExists===true){
            alert("A driver with the email "+email+" already exists.")
          }else{
            alert("Successfully created account for "+email)
            setProfileURL("")
            setUsername("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            setDateOfBirth("")
            setDistrict("default")
            setVehicle("default")
            setAddress("")
          }
        }else{
          alert("Profile picture is not selected. Please select a profile picture.")
        }
      }else{
      alert("Passwords do not match. Please try again.")
      }
    }else{
      alert("Please ensure all fields are filled.")
    }
  }

  return (
    <div className={styles.mainContainer}>
      <Box className={styles.main}>
        <Box className={styles.forms}>
          <Stack className={styles.driverLoginLeft}>
            <Box className={styles.profilePicture}>
              <Box className={styles.profilePictureComponentLeft}>
                <InputLabel sx={{fontSize:"15px"}}>Profile Picture</InputLabel>
                <input id="upload-button" type="file" accept="image/*" onChange={handleImageChange} style={{display:"none"}}/>
                <Button variant="contained" color="success" sx={{width:"150px"}}><label htmlFor="upload-button">Upload Image</label></Button>
              </Box>
              <Box className={styles.profilePictureComponentRight}>
                <output><img src={imageURL} alt="Uploaded" style={{maxWidth:"100px", maxHeight:"100px", borderRadius:"50px"}}/></output>
              </Box>
            </Box>

            <p>
              <br/>
            </p>

            <Input type="text" value={username} placeholder="Username" onChange={handleUsername} sx={{fontSize:"15px"}}/>
            
            <p>
              <br/>
            </p>

            <Input type="text" value={email} placeholder="Email" onChange={handleEmail} sx={{fontSize:"15px"}}/>

            <p>
              <br/>
            </p>

            <Input type="password" value={password} placeholder="Password" onChange={handlePassword} sx={{fontSize:"15px"}}/>

            <p>
              <br/>
            </p>

            <Input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={handleConfirmPassword} sx={{fontSize:"15px"}}/>
          </Stack>

          <Stack className={styles.driverLoginRight}>
            <InputLabel>Date of Birth</InputLabel>
            <Input type="date" value={dateOfBirth} onChange={handleDateOfBirth} sx={{fontSize:"15px"}}/>

            <p>
              <br/>
            </p>

            <InputLabel>District</InputLabel>
            <Select value={district} onChange={handleDistrict}>
            <MenuItem value="default" sx={{display:"none"}}>Select your District</MenuItem>
              <MenuItem value="Thiruvananthapuram">Thiruvananthapuram</MenuItem>
              <MenuItem value="Kollam">Kollam</MenuItem>
              <MenuItem value="Pathanamthitta">Pathanamthitta</MenuItem>
              <MenuItem value="Alappuzha">Alappuzha</MenuItem>
              <MenuItem value="Kottayam">Kottayam</MenuItem>
              <MenuItem value="Idukki">Idukki</MenuItem>
              <MenuItem value="Ernakulam">Ernakulam</MenuItem>
              <MenuItem value="Thrissur">Thrissur</MenuItem>
              <MenuItem value="Palakkad">Palakkad</MenuItem>
              <MenuItem value="Malappuram">Malappuram</MenuItem>
              <MenuItem value="Kozhikode">Kozhikode</MenuItem>
              <MenuItem value="Wayanad">Wayanad</MenuItem>
              <MenuItem value="Kannur">Kannur</MenuItem>
              <MenuItem value="Kasaragod">Kasaragod</MenuItem>
            </Select>

            <p>
              <br/>
            </p>

            <InputLabel>Vehicle Type</InputLabel>
            <Select value={vehicle} onChange={handleVehicle}>
              <MenuItem value="default" sx={{display:"none"}}>Select your Vehicle Type</MenuItem>
              <MenuItem value="2-Seater Bike">2-Seater Bike</MenuItem>
              <MenuItem value="2-Seater Scooter">2-Seater Scooter</MenuItem>
              <MenuItem value="4-Seater Hatchback">4-Seater Hatchback</MenuItem>
              <MenuItem value="4-Seater Sedan">4-Seater Sedan</MenuItem>
              <MenuItem value="5-Seater">5-Seater</MenuItem>
              <MenuItem value="7-Seater">7-Seater</MenuItem>
              <MenuItem value="7-Seater Luxury">7-Seater Luxury</MenuItem>
              <MenuItem value="8-Seater Van">8-Seater Van</MenuItem>
            </Select>

            <p>
              <br/>
            </p>

            <TextareaAutosize placeholder="Address" value={address} minRows={3} onChange={handleAddress} className={styles.textAreaAutoSize}/>
          </Stack>
        </Box>

        <Box className={styles.submitContainer}>
          <Button variant="contained" onClick={signup} sx={{fontSize:"20px", width:"500px"}}>Sign Up</Button>
          <a href="/" className={styles.signUpLink}>Already have an account?Login!</a>
        </Box>
      </Box>
    </div>
  )
}

export default DriverSignup
