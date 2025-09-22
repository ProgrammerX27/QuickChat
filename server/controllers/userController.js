import { genrateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import cloudinary from '../lib/cloudinary.js'

//Signup new user
export const signup = async (req, res) => {

    const { fullName, email, password, bio} = req.body;
    try {
        if (!fullName || !email || !password ) {
            return res.json({success: false, message: "Missing Details"})
        }
        const user = await User.findOne({email});
        if (user) {
            return res.json({success: false, message: "Account already exists"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName,email,password: hashedPassword,bio, profilePic: "https://your-default-avatar.png"
        });
        const token = genrateToken(newUser._id)
        res.json({success: true, user: newUser, token, message: "Account created successfully"})
       // res.json({success: true, userData: newUser, token, message: "Account created successfully"})
    } catch (error) {
        console.log(error.message)
        res.json({success: false,  message: error.message})
    }

}

//controller to login the user
export const login = async (req, res) => {
   try {
     const { email, password } = req.body;
    const userData = await User.findOne({email});
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, userData.password);
    if (!isPasswordCorrect) {
        return res.json({success: false, message: "Invalid credentials"})
    }
    const token = genrateToken(userData._id)

        res.json({success: true, userData, token, message: "Login successfully"})
   } catch (error) {
       console.log(error.message)
       res.json({success: false,  message: error.message})
   }

}

//Controller to check if useris authenticated
export const checkAuth = (req,res)=>{
    res.json({success: true, user: req.user});
}

// controller to update user profile details
export const updateProfile = async (req, res) => {
  try {
    const { profilePic, bio, fullName } = req.body;
    const userId = req.user._id;
    let updatedUser;

    if (!profilePic) {
      updatedUser = await User.findByIdAndUpdate(
        userId,
        { bio, fullName },
        { new: true } // 👈 must return updated doc
      );
    } else {
      const upload = await cloudinary.uploader.upload(profilePic);
      updatedUser = await User.findByIdAndUpdate(
        userId,
        { profilePic: upload.secure_url, bio, fullName },
        { new: true } // 👈 must return updated doc
      );
    }

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
