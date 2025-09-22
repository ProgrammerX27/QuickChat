import jwt from "jsonwebtoken";

//Function to genrate token for user
export const genrateToken = (userId) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET);
    return token;
}