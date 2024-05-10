//Learning mongoDB
//adding new user to the database
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://abhirawat102:YbPxHC5AaBf9aKJW@cluster0.jpnq584.mongodb.net/userappnew");

const User = mongoose.model('Users', { name: String, email: String, password: String });

const newUser = new User({ name: 'abhi', email: 'xcvkp@example.com', password: 'abhi@123' });
newUser.save().then(() => console.log('saved')).catch(err => console.error(err));
//Using user.save would send the data to the database
