

const mongoose = require("mongoose") 

const userSchema = mongoose.Schema({

    username:{
        type:'string',
        required:true
    },
    password:{
        type:'string',
        required:true
    },
    email:{
        type:'string',
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    roles:{
    type:String,
    required:true,
    default:"user",

    enum:['user','organizer']
    }
},{
    versionKey:false
})

const UserModel = mongoose.model("User",userSchema)

module.exports = UserModel