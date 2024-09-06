const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profilePic:{
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    dateOfJoining: {
        type: Date
    },
    district: {
        type: String
    },
    address: {
        type: String
    },
    vehicleType:
    {
        type: String
    }
});

const driverSchema = new mongoose.Schema({
    profilePic:{
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    dateOfJoining: {
        type: Date
    },
    district: {
        type: String
    },
    vehicle: {
        type: String
    },
    address: {
        type: String
    },
    rating: {
        type: Number
    }
});

const UserB = mongoose.model('UserB', userSchema);
const Driver = mongoose.model('Driver', driverSchema);

module.exports = { UserB, Driver };

