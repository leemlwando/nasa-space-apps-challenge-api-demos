module.exports = (req,res,next)=>{
    res.json(
        {success:true,message:"welcome to NASA space app challenge Zambia demo api. please refer to documentation on how to interact with our APIs. Twatotela! ", maintained_by:{
            first_name:"lee",
            last_name:"lwando",
            phone:"+260950482560",
            email:"leemlwando@gmail.com",
            social_links:{
                facebook:"@leelwando",
                github:"@leemlwando",
                twishe:"@leelwando"
            },
            career:{
                works_at:"MicroTech Cloud Solutions",
                postion:"CTO",
                nationality:"Zambian",
                interests:{
                    games:null,
                    movies:{
                        genre:["sci-fi", "suspense", "comedy", "conspiracy"],
                        favourite_actors:["morgan freeman", "keanu reeves", "matt daemon", "Samuel L. jackson", "Benedict Cumberbatch", "Tom Hanks"],
                        list:["constantine", "lucy", "Davinci Code", "Angels and Demons", "all marvel cinematic universe movies"],
                    },
                    music:"just something peacefull",
                    pictures:"my future girlfriend obviusly :-)"
                }
            }
        }}
    )
}