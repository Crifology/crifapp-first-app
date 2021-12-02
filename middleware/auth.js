const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const authorization = req.get('Authorization');
    const token = authorization.split(' ')[1];
        
    if (!token){
        next(new Error('Token was not created/sent'));
        return;
    } 

    jwt.verify(token, process.env.JWT_SECRET, (err, isMatch) => {
        if (err) {
            next(err);
            return;
        }

        if (!isMatch) {
            next(new Error('Token does not seem valid'));
            return;
        }
        next();
    });
}

module.exports = {
    authenticate
}