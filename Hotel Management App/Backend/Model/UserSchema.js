const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username : String,
    email : {type : String ,  unique: true},
    password : String,
    contact : {
        type :  String,
        maxlength : 11,
        unique : true
    },
    role : {
        type : String,
        default : 'user',
        enum : ['user' , 'vendor' ,'admin']
    },
    status:{
        type: String,
        default : 'pending',
        enum : ['pending' , 'approved' ,'blocked']
    }
})

const UserModel = mongoose.model("user" , userSchema);

module.exports = UserModel;