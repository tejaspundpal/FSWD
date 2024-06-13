const verify = (req,res,next) =>{
    // res.send("This is this middleware");
    console.log("verified success");
next();
}
module.exports = verify;

