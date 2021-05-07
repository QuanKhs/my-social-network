const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/quankhs/image/upload/v1620351649/avatar_default.jpg',
    },
    role: {
        type: String,
        default: 'user',
    },
    gender: {
        type: String,
        default: 'male',
    },
    phoneNumber: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        default: '',
    },
    story: {
        type: String,
        default: '',
        maxLength: 200,
    },
    website: {
        type: String,
        default: '',
    },
    followers: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user',
        }
    ],
    following: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ]
}, { timestamps: true });


module.exports = mongoose.model('user', userSchema);