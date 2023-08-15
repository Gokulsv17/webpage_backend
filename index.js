const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ProfileModel = require("./models/profile")
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/webpageData")

app.get('/getUsers',(req,res)=>{
    ProfileModel.find()
    .then(user=>{res.json(user)})
    .catch(err =>res.json(err))
})
app.listen(8000, () => {
  console.log("server is running");
});
