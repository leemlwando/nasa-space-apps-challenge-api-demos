const mongoose = require('mongoose');

// mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true });

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-vsuza.mongodb.net/${process.env.DB_NAME}?retryWrites=true`)


const db = mongoose.connection;

db.once("open",()=>console.log('MONGODB CONNECTED SUCCSESFULLY'));

db.on("error",(err)=>{
    console.log(err)
    process.exit(1);
})


module.exports = {db};