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
    },
    isBooked: {
        type: Boolean 
    }
});

const userRequestsSchema = new mongoose.Schema({
    requestId: {
        type: Number
    },
    userId: {
        type: String
    },
    username: {
        type: String
    },
    driverId: {
        type: String
    },
    drivername: {
        type: String
    },
    accepted: {
        type: [String]
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
    rejected: {
        type: [String]
    },
    fare: {
        type: [Number]
    },
    confirmedFare: {
        type: Number
    }
});

const UserB = mongoose.model('UserB', userSchema);
const Driver = mongoose.model('Driver', driverSchema);
const UserRequests = mongoose.model('UserRequests', userRequestsSchema)

module.exports = { UserB, Driver, UserRequests };

