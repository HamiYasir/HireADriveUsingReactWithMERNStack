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

const userRequestsSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    driverId: {
        type: String
    },
    startingLocation: {
        type: String
    },
    destination: {
        type: String
    },
    vehicle: {
        type: String
    },
    driver: {
        type: String
    }
});

const UserB = mongoose.model('UserB', userSchema);
const Driver = mongoose.model('Driver', driverSchema);
const UserRequests = mongoose.model('UserRequests', userRequestsSchema)

module.exports = { UserB, Driver, UserRequests };

