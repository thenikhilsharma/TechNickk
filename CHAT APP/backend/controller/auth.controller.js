import User from "../models/user.model.js";
import bcriptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const signup = async(req, res) => {
    const {username, email, password, confirmPassword, gender} = req.body

    let validUser;
    validUser = await User.findOne({email})

    if (validUser) {
        return res.status(400).json({
            success: false,
            message: 'User already exists',
        })
    }

    if(password !== confirmPassword){
        return res.status(400).json({
            error: 'Passoword doesnt match',
        })
    }

    const hashedPassword = bcriptjs.hashSync(password, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User ({
        username,
        email,
        password: hashedPassword,
        gender,
        profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    })

    try {
        // generate json web tokken
        const tokken = jwt.sign({id: newUser._id}, process.env.JWT_SECRET,
        await newUser.save(),

        res.cookie('access_tokken', tokken, {httpOnly: true}).status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilePic: newUser.profilePic,
        })
    )
    }
    catch(error) {
        console.log('Error ' + error)
        res.status(500).json({
            error: 'Internal server error',
        })
    }
}
export const login = (req, res) => {}
export const logout = (req, res) => {}