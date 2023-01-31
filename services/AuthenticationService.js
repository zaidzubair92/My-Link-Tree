const jwt = require('jsonwebtoken');

function createAccessToken(id, pass) {
    const user = {email : id};
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    return {accessToken: accessToken};
};

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']; 
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) {
            return res.sendStatus(403);
        } else {
            req.user = user;
            console.log(req.user);
        }
    });
};

module.exports = {
    createAccessToken,
    authenticateToken
};