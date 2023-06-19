import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (request, response) => {
    try {
        //getting values
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = request.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        //creating new user to save to db
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
        });
    
        const savedUser = await newUser.save();
        response.status(201).json(savedUser);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

/* LOGGING IN */
export const login = async (request, response) => {
    try {
        //getting user info
        const { email, password } = request.body;
        const user = await User.findOne({ email: email });
        
        //checking for user
        if (!user) return response.status(500).json({ msg: "User does not exist." });

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) return response.status(500).json({ msg: "Invalid credentials." });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        response.status(200).json({ token, user });
  } catch (error) {
        response.status(500).json({ erroror: error.message });
  }
};
