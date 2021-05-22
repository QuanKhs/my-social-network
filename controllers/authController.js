const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createAccessToken, createRefreshToken } = require('../utils/createToken');

const authController = {
    register: async (req, res) => {
        try {
            const { fullName, userName, email, password, gender } = req.body;
            let newUserName = userName.toLowerCase().replace(/ /g, '');

            //validate user
            const isUserExisted = await Users.findOne({ userName: newUserName });
            if (isUserExisted)
                return res.status(400).json({ msg: 'User name already exists!' });

            const isEmailExisted = await Users.findOne({ email });
            if (isEmailExisted)
                return res.status(400).json({ msg: 'Email already exists!' });

            if (password.length < 6)
                return res.status(400).json({ msg: 'Password must be at least 6 characters!' });

            //using bcrypt to hash password
            const passwordHash = await bcrypt.hash(password, 12);

            //create new user
            const newUser = new Users({ fullName, userName, email, password: passwordHash, gender })
            console.log("🚀 ~ newUser", newUser);

            //create accessToken, refreshToken
            const accessToken = createAccessToken({ id: newUser._id });
            const refreshToken = createRefreshToken({ id: newUser._id });

            //set cookie
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 432000000,
                //5 days
            });

            //save MongoDB atlas
            await newUser.save();

            //json response
            res.json({
                msg: 'Register Successful!',
                accessToken,
                user: {
                    ...newUser._doc,
                    password: '',
                }
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            //validate email, password
            const user = await Users.findOne({ email }).populate('followers following', '-password');
            if (!user)
                return res.status(400).json({ msg: 'This email does not exist.' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({ msg: 'Wrong password! Check it again.' });


            //create accessToken, refreshToken
            const accessToken = createAccessToken({ id: user._id });
            const refreshToken = createRefreshToken({ id: user._id });

            //set cookie
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 432000000,
                //5 days
            });

            //json response
            res.json({
                msg: 'Login Successful!',
                accessToken,
                user: {
                    ...user._doc,
                    password: '',
                }
            });

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshToken', { path: '/api/refresh_token' });
            return res.json({ msg: 'Logged out successfully!' });

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    generateAccessToken: async (req, res) => {
        try {
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken)
                return res.status(400).json({ msg: 'Please Login!' });

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, result) => {
                if (err)
                    return res.status(400).json({ msg: 'Please Login!' });

                console.log(result);
                const user = await Users.findById(result.id)
                    .select('-password')
                    .populate('followers following', '-password');

                if (!user)
                    return res.status(400).json({ msg: 'Do not exits!' });

                const accessToken = createAccessToken({ id: result.id });

                res.json({ accessToken, user });
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}


module.exports = authController;