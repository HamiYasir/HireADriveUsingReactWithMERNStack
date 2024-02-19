import React,{useState} from "react"
import {Box, Input, Stack, Button, InputLabel, TextareaAutosize, Select, MenuItem} from "@mui/material";
import styles from "./driverSignup.module.css"
import defaultImage from "../../pictures/default_profile_pic_1.jpeg"

const DriverSignup=()=>{
    const [imageUrl, setImageUrl]=useState(defaultImage)
  
    const handleFileChange=(event)=>{
      const file=event.target.files[0]
      if (file){
        const reader=new FileReader()
        reader.onload=()=>{
          const image=new Image()
          image.src=reader.result
          image.onload = () => {
            if (image.width === 512 && image.height === 512){
              setImageUrl(reader.result)
            }else{
              alert(`Please upload an image with dimensions 512px(width)x512px(height).`)
            }
          }
        }
        reader.readAsDataURL(file);
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
                <input id="upload-button" type="file" accept="image/*" onChange={handleFileChange} style={{display:"none"}}/>
                <Button variant="contained" color="success" sx={{width:"150px"}}><label htmlFor="upload-button">Upload Image</label></Button>
              </Box>
              <Box className={styles.profilePictureComponentRight}>
              <output><img src={imageUrl} alt="Uploaded" style={{maxWidth:"100px", maxHeight:"100px", borderRadius:"50px"}} /></output>
              </Box>
            </Box>
            <p><br/></p>

            <Input type="text" placeholder="Username" sx={{fontSize:"15px"}}/>
            
            <p><br/></p>

            <Input type="text" placeholder="Email" sx={{fontSize:"15px"}}/>
            
            <p><br/></p>
            
            <Input type="password" placeholder="Password" sx={{fontSize:"15px"}}/>
            
            <p><br/></p>

            <Input type="password" placeholder="Confirm Password" sx={{fontSize:"15px"}}/>
          </Stack>

          <Stack className={styles.driverLoginRight}>
            <InputLabel>Date of Birth</InputLabel>
            <Input type="date" sx={{fontSize:"15px"}}/>

            <p><br/></p>

            <InputLabel>Select your District</InputLabel>
            <Select>
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

            <InputLabel>Select your Vehicle Type</InputLabel>
            <Select>
              <MenuItem value="Thiruvananthapuram">2-seater</MenuItem>
              <MenuItem value="Kollam">4-seater</MenuItem>
              <MenuItem value="Kollam">4-seater luxury</MenuItem>
              <MenuItem value="Kollam">7-seater</MenuItem>
            </Select>

            <p><br/></p>

            <TextareaAutosize placeholder="Address" minRows={3} sx={{fontSize:"15px"}}/>
          </Stack>
        </Box>

        <Box className={styles.submitContainer}>
          <Button variant="contained" sx={{fontSize:"20px", width:"500px"}}>Sign Up</Button>
          <a href="/" className={styles.signUpLink}>Already have an account?Login!</a>
          {/* <Typography>{error}</Typography> */}  
        </Box>
      </Box>
    </div>
  )
}

export default DriverSignup