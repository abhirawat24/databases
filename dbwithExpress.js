const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
//used to create a specific area where the data will be stored
mongoose.connect("mongodb+srv://abhirawat102:YbPxHC5AaBf9aKJW@cluster0.jpnq584.mongodb.net/useraddition?retryWrites=true&w=majority");

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async function(req, res){
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({email: username});
  if (existingUser){
    return res.status(400).send('Username already exists');
  }
  const user = new user({
    name: name,
    email: email,
    password: password
  });
  user.save();
  res.json({
    msg: "User created successfully"
  })
})
