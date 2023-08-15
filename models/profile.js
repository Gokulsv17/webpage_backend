const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name:String,
    email:String,
    phonenum:Number,
    position:String,
    pass:String
})

const ProfileModel = mongoose.model("profiles",profileSchema)

module.exports =ProfileModel; 