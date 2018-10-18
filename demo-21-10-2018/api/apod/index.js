const parseApods = require('./lib/parseApods');
module.exports = {
    get:(req,res,next)=>parseApods(req,res,next),
}