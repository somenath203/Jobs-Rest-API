const jwt = require('jsonwebtoken');

const { UnauthenticatedError } = require('../errors');


const auth = async (req, res, next) => {

    const authHeader = req.headers.authorization;


    if(!authHeader || !authHeader.startsWith('Bearer ')) {

        throw new UnauthenticatedError('Authentication Error | No headers found')
    };


    const userToken = authHeader.split(' ')[1];

    try {
        
        const payload = jwt.verify(userToken, process.env.JWT_SECRET);

        req.user = {
            userId: payload.userId,
            fullname: payload.fullname
        };

        next();

    } catch (error) {
        
        throw new UnauthenticatedError('Invalid Authentication');

    }

};

module.exports = auth;