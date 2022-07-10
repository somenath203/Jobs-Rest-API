const { StatusCodes } = require('http-status-codes');

const User = require('../models/User');

const  { BadRequestError, UnauthenticatedError } = require('../errors');


const register = async (req, res) => {

    const user = await User.create({ ...req.body });

    const token = user.generateToken(); 


    res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'user created successfully',
        user: {
            fullname: user.fullname
        },
        token
    });

};


const login = async (req, res) => {

    const {email, password} = req.body;

    if(!email || !password) {

        throw new BadRequestError('Please provide email and password');

    };

    const user = await User.findOne({ email });

    if(!user) {

        throw new UnauthenticatedError('Invalid credentials');

    };

    const isPasswordCorrect = await user.comparePassword(password);

    if(!isPasswordCorrect) {

        throw new UnauthenticatedError('Invalid credentials');

    };


    const token = user.generateToken();

    res.status(StatusCodes.OK).json({
        success: true,
        message: `${user.fullname} logged in successfully`,
        token
    });

};


module.exports = {
    register,
    login
};