function isAuthenticated(req, res, next){
    console.log(req.user)
    if(!req.user){
        return res.status(400).json({message: "You are not authenticated to do that!"});
    }else{
        next();
    }
    
}

module.exports = isAuthenticated;