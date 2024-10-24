import React from "react"
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom"
import Signup from "./components/signup/Signup.jsx"
import Login from "./components/login/Login.jsx"
import Home from "./components/home/Home"
import DriverJourney from "./components/home/driverHome/body/driverJourney/DriverJourney.jsx"
import UserJourney from "./components/home/userHome/body/userJourney/UserJourney.jsx"
import "./App.css"

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/driverJourney" element={<DriverJourney/>}/>
                <Route path="/userJourney" element={<UserJourney/>}/>
            </Routes>
        </Router>
    )
}

export default App