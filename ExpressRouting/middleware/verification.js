const verifying = (req, res, next) => {
    console.log("This is middleware");
    next();
}


module.exports = verifying;