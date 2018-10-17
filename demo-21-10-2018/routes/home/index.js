const parseHome = require('./lib/parseHome');

module.exports = {
    get: (req,res,next)=>parseHome(req,res,next)
}