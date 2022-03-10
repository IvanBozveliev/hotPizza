const jwt = require('jsonwebtoken');
const {COOKIE_NAME, SECRET} = require('../config/config');

module.exports = function (){
    return (req, res, next) =>{

        let token2 = req.headers['authorization'];
        
        let token = req.headers['authorization']?.split(' ')[1] || undefined; 
        console.log(token2)
        if(token == 'undefined'){
            token = false;
        }
        
        if(token){
            jwt.verify(token, SECRET, function(err, decoded) {
                if(err){
                    // res.clearCookie(COOKIE_NAME)
                    return res.status(400).json({message: 'Your token is not valid'})
                }else{
                   req.user = decoded;
                   res.locals.user = decoded;
                   res.locals.isAuthenticated = true;
                  
                //    res.locals.isEnroll = false;
                }
            })
        }
        next();
    }
}