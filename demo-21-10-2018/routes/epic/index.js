const getEpic = require('./lib/methods/get');

module.exports = {
    get: (req,res,next)=>getEpic(req,res,next)
}