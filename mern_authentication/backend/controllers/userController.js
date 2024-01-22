import asycHandler from 'express-async-handler'

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public 
const authUser =  asycHandler( async (req, res) => {
    res.status(200).json({message: 'Auth User'});
});

// @desc    Register a new user
// route    POST /api/users
// @access  Public 
const registerUser =  asycHandler( async (req, res) => {
    res.status(200).json({message: 'Register User'});
});

// @desc    Logout user
// route    POST /api/users/logaout
// @access  Public 
const logoutUser =  asycHandler( async (req, res) => {
    res.status(200).json({message: 'Logout User'});
});

// @desc    Get user profile
// route    GET /api/users/profile
// @access  Private 
const getUserProfile =  asycHandler( async (req, res) => {
    res.status(200).json({message: 'User profile'});
});

// @desc    Update user profile
// route    PUT /api/users/profile
// @access  Private 
const updateUserProfile =  asycHandler( async (req, res) => {
    res.status(200).json({message: 'Update user profile'});
});



export { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};