const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{type:String, require:true},
    lastName:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
    api_keys:[]
});


const ApodSchema = new Schema({
    copyright:{type:String},
    date:{type:String},
    explanation:{type:String},
    media_type:{type:String},
    service_version:{type:String},
    // hdurl:{
    //     media_type:{type:String},
    //     service_version:{type:String},
    //     title:{type:String},

    // },
    hdurl:{type:String},
    title:{type:String},
    url:{type:String}

});


module.exports = {UserSchema,ApodSchema};
