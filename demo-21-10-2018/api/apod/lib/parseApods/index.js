const request = require('request');
const {Apod} = require('../../../../lib/db');

module.exports = (req,res,next)=>{
    //get query parameters
    let {date,hd} = req.query;

    let d = new Date(); //get current date
    let month  = d.getUTCMonth().toString().length ===  1 ? `0${d.getUTCMonth()}` : d.getUTCMonth(); //get corect month %m

    //
    let today= date ? date : `${d.getUTCFullYear()}-${month}-${d.getUTCDate()}`; //get correct date %y-%m-%d
   
        //check if resource is cached to avoid pulling it off the network
    Apod.findOne({date:today}).then(resDB=>{
        //if cached, return cached content
        if(resDB){
            return res.json({success:true,cached:true,response:resDB});
        }

        //resource ot cached, pul it off the network
        request(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${today}`, function(err,response,body){
            // console.log(err);
            //check for ay erros
            if(err){
                return next({code:response ? response.statusCode : 500, message: response ? response.statusMessage : "service unavailable", reason:"An error occoured while processing your request"});
            }
            //create an Apod
            // console.log(body)
            Apod.create(JSON.parse(body))
                .then(r=>res.json({success:true,cached:false,response:r}))
                    .catch(err=>next(err));

          
        })
    
        
    }).catch(err=>{
        next(err);
    })

}