// this is the user mongoose model that store username, password and email

import {Schema, model, models} from 'mongoose'; 

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
})  

const User = models.User || model("User", UserSchema);

export default User;