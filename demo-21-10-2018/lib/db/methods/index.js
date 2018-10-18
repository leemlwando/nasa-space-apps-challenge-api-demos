const {UserSchema,ApodSchema} = require('../schema');
const bcrypt = require('bcrypt');




UserSchema.pre('save',function(next){
    let self = this;

    let password = self.password;
    let salt = 10;

    bcrypt.hash(password,salt,function(err,hash){
        if(err){return next(err)};
        self.password = hash;
        next();
    })
})


module.exports = {UserSchema,ApodSchema};