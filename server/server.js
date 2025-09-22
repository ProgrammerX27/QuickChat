import express from 'express'
import "dotenv/config"
import cors from 'cors'
import http from 'http'
import { connectDB } from './lib/db.js'
import userRouter from './routes/userRoutes.js'
import messageRouter from './routes/messageRoutes.js'
import { Server } from 'socket.io'


//create express app and http server
const app = express()
const server = http.createServer(app)

//initialize socket.io
export const io = new Server(server,{
    cors: {origin: "*"}
})

//store online user
export const userSocketMap = {}; //{userId : socketId}

//socket.io handler
io.on("connection",(socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("User Connected", userId);
    if (userId) {
       userSocketMap[userId] = socket.id; 
    }
    //emit online user to all connected
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", ()=>{
        console.log("User Disconnected", userId)
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

//middleware setup
app.use(express.json({limit: "4mb"}));
app.use(cors());


//Routes
app.use("/api/status",(req,res)=>res.send("Server is live..."));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);


//connect to mongodb
await connectDB();

const PORT = process.env.PORT || 5000
//server.listen(PORT, ()=> console.log("Server is running on PORT: " + PORT))