const jwt = require('jsonwebtoken');
const users = require('../data/users.json');

const loginPage = (req, res, next) => {
    res.render('login');
};

const login = (req, res, next) => {
    const { email, password } = req.body;
    const matchedUser = users.find(user => user.email === email && user.password === password);

    if (matchedUser) {
        const claims = { 
            email: matchedUser.email,
            role: matchedUser.role
        }

        //generator token and have the secret key
        jwt.sign(claims, process.env.JWT_SECRET, (error, token) => {
            if (error) {
                res.json({ 
                    message: 'Sorry, could not issue a token! Try Again Later!'
                });
                return;
            }
            res.json({ 
                token: token
            });
        });
    } else {
        const error = new Error('Either email or password is incorrect!');
        next(error);
    }
};


module.exports = {
    login,
    loginPage
}