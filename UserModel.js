const mongoose = require('mongoose');
//create user schema
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    dob: {
        type: Date,
        required: false
    },
    avatar: {
        type: String,
        required: false    
    },
    dateCreated: {
        type: Date
    }
    subscription: {
    type: Boolean,
    default: false,
  },
})
//create the model
const UserModel = mongoose.model('users',UserSchema);
//export the model
module.exports = UserModel;