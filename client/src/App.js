import React from "react"
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom"
import Signup from "./components/signup/Signup.jsx"
import Login from "./components/login/Login.jsx"
import Home from "./components/home/Home"
import "./App.css"

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default App