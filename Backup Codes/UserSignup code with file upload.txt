import React,{useState} from "react"
import {Box, Input, Stack, Button, InputLabel, TextareaAutosize, Select, MenuItem} from "@mui/material";
import styles from "./userSignup.module.css"
import defaultImage from "../../pictures/default_profile_pic_1.jpeg"
import axios from "axios"
import firebase from "firebase/compat/app"
import "firebase/compat/storage"

const UserSignup=()=>{
    const [profileURL, setProfileURL]=useState("")
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")
    const [dateOfBirth, setDateOfBirth]=useState("")
    const [district, setDistrict]=useState("Select your District")
    const [address, setAddress]=useState("")
    const [imageURL, setImageURL]=useState(defaultImage)
   
    const handleFileChange=(event)=>{
      const file=event.target.files[0]
      if (file){ 
        const reader=new FileReader()
        reader.onload=()=>{
          const image=new Image()
          image.src=reader.result
          image.onload = () => {
            if (image.width === 512 && image.height === 512){
              setImageURL(reader.result)
              const selectedFile=event.target.files[0]
              if(selectedFile){
                const storageRef=firebase.storage().ref() //for firebase. Selecting the reference of storage
                const fileRef=storageRef.child(selectedFile.name)  //for firebase. Selecting the child of storage and passing the name of selected file
        
                fileRef.put(selectedFile) //for firebase. Uploads the image to firebase storage
                .then((snapshot)=>{
                  snapshot.ref.getDownloadURL() //for firebase. Gets the url for the uploaded image
                  .then((downloadURL)=>{
                    setProfileURL(downloadURL)
                  })
                }) //for firebase. Snapshot is used to change in the app after upload of file
              }else{
                alert("No selected image. Please select a an image")
              }
            }else{
              alert(`Please upload an image with dimensions 512px(width)x512px(height).`)
            }
          }
        }
        reader.readAsDataURL(file);
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

    const handleAddress=(event)=>{
      setAddress(event.target.value)
    }

    const signup=async()=>{
      if(password===confirmPassword){
        const submit=await axios.post("http://localhost:4000/userSignup", {profilePic:profileURL, username:username, email:email, password:password, dateOfBirth:dateOfBirth, district:district, address:address})
        alert("A user with the email "+submit.data.email+" already exists.")
      }else{
        alert("Passwords do not match. Please try again.")
      }
    }

  return (
    <div className={styles.mainContainer}>
      <Box className={styles.main}>
        <Box className={styles.forms}>
          <Stack className={styles.userLoginLeft}>
            <Box className={styles.profilePicture}>
              <Box className={styles.profilePictureComponentLeft}>
                <InputLabel sx={{fontSize:"15px"}}>Profile Picture</InputLabel>
                <input id="upload-button" type="file" accept="image/*" onChange={handleFileChange} style={{display:"none"}}/>
                <Button variant="contained" color="success" sx={{width:"150px"}}><label htmlFor="upload-button">Upload Image</label></Button>
              </Box>
              <Box className={styles.profilePictureComponentRight}>
              <output><img src={imageURL} alt="Uploaded" style={{maxWidth:"100px", maxHeight:"100px", borderRadius:"50px"}} /></output>
              </Box>
            </Box>
            <p><br/></p>

            <Input type="text" placeholder="Username" onChange={handleUsername} sx={{fontSize:"15px"}}/>
            
            <p><br/></p>

            <Input type="text" placeholder="Email" onChange={handleEmail} sx={{fontSize:"15px"}}/>
            
            <p><br/></p>
            
            <Input type="password" placeholder="Password" onChange={handlePassword} sx={{fontSize:"15px"}}/>
            
            <p><br/></p>

            <Input type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} sx={{fontSize:"15px"}}/>
          </Stack>

          <Stack className={styles.userLoginRight}>
            <InputLabel>Date of Birth</InputLabel>
            <Input type="date" onChange={handleDateOfBirth} sx={{fontSize:"15px"}}/>

            <p><br/></p>

            <InputLabel>District</InputLabel>
            <Select value={district} onChange={handleDistrict}>
              <MenuItem value="Select your District" sx={{display:"none"}}>Select your District</MenuItem>
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

            <p><br/></p>

            <TextareaAutosize placeholder="Address" minRows={3} onChange={handleAddress} sx={{fontSize:"15px"}}/>
          </Stack>
        </Box>

        <Box className={styles.submitContainer}>
          <Button variant="contained" onClick={signup} sx={{fontSize:"20px", width:"500px"}}>Sign Up</Button>
          <a href="/" className={styles.signUpLink}>Already have an account?Login!</a>
          {/* <Typography>{error}</Typography> */}  
        </Box>
      </Box>
    </div>
  )
}

export default UserSignup