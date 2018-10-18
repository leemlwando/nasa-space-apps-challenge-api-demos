const {UserSchema,ApodSchema} = require('../methods');
const mongoose = require('mongoose');

const User = mongoose.model("Users",UserSchema);
const Apod = mongoose.model("Apods",ApodSchema);


module.exports = {User,Apod};