import React from "react"
import styles from "./userProfile.module.css"
import image from "../../../../pictures/abhinand_t.jpg"
import {Box,Stack,InputLabel,Button,Typography,TextareaAutosize,Select,MenuItem,Paper} from "@mui/material"

const UserProfile=()=>{
  return(
    <Box className={styles.userProfile}>
      <Box className={styles.rowContainer}>
        <Stack className={styles.overview}>
          <div style={{display:"flex",flexDirection:"row",height:"90%",paddingTop:"2%"}}>
            <Paper sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",height:"100%",width:"33.3%",padding:"10px 20px",marginRight:"5px",borderRadius:"20px",boxShadow:"2px 2px 10px black"}}>
              <img src={image} alt="profile pic" style={{maxHeight:"75%",maxWidth:"75%",borderRadius:"50%",marginBottom:"5%",border:"2px ridge black"}}/>
              <div style={{backgroundColor:"rgb(200,200,200)",borderRadius:"20px",boxShadow:"2px 2px 5px black"}}>
                <p style={{color:"gold",fontSize:"75px",marginTop:"-5%",marginBottom:"15px"}}>&#9734;&#9734;&#9734;&#9734;&#9734;</p>
              </div>
              <Button variant="contained" color="success" sx={{marginTop:"5%",borderRadius:"20px",width:"90%"}}>Change Picture</Button>
            </Paper>
            <Paper sx={{height:"100%",marginLeft:"5px",backgroundColor:"white",width:"66.6%",marginRight:"5px",borderRadius:"20px",boxShadow:"2px 2px 10px black",padding:"10px 30px",textAlign:"center"}}>
              <p style={{fontSize:"50px"}}>You joined Hire a Drive on &lt;dateJoined&gt;</p>
            </Paper>
          </div>
        </Stack>
        <p style={{width:"15%",marginRight:"-0%"}}>&nbsp;</p>
        <Stack className={styles.passwordAndAddress}>
          <Box className={styles.columnContainer}>
            <Box className={styles.passwordContainer}>
              <Typography variant="h5" sx={{padding:"0 5%",marginBottom:"3%"}}>Change Password:</Typography>
              <InputLabel htmlfor="password" sx={{fontSize:"27px",width:"100%",marginLeft:"30%"}}>Password:&nbsp;&nbsp;<input id="password" type="text" className={styles.password}/></InputLabel>
              <p></p>
              <InputLabel htmlfor="confirmPassword" sx={{fontSize:"27px",width:"100%",marginLeft:"19%"}}>Confirm Password:&nbsp;&nbsp;<input id="password" type="text" className={styles.password}/></InputLabel>
              <p></p>
              <Button variant="contained" color="success" sx={{width:"22%", marginLeft:"75%"}}>Change Password</Button>
            </Box>
            <Box className={styles.addressContainer}>
              <Typography variant="h6" sx={{padding:"0 5%",marginBottom:"3%", marginRight:"65%"}}>Change Region & Address:</Typography>
              <InputLabel htmlfor="region" sx={{marginRight:"50%", fontSize:"20px"}}>Region:</InputLabel>
              <Select id="region" className={styles.region}>
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
              <Button variant="contained" color="success" sx={{width:"22%", marginLeft:"75%",marginTop:"-4%"}}>Change Region</Button>
              <p></p>
              <InputLabel htmlfor="address" sx={{marginRight:"50%", fontSize:"22px"}}>Address:</InputLabel>
              <TextareaAutosize id="address" minRows={5} className={styles.address}/>
              <Button variant="contained" color="success" sx={{width:"22%", marginLeft:"75%",marginTop:"-7%"}}>Change Address</Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default UserProfile