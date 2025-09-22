# 💬 QuickChat - Real-time Chat Application ⚡

QuickChat is a **⚡ real-time chat application** built with the **MERN stack** (🍃 MongoDB, 🚏 Express.js, ⚛️ React.js, 🟩 Node.js) and **📡 Socket.io**.  
It supports **🔑 user authentication, 🟢 online status, 🖼️ profile pictures, and 💬 real-time messaging**.

---

## ✨ Features ✨

- 🔑 **User Authentication** (Signup/Login with JWT)  
- 👤 **User Profiles** with profile picture  
- 🟢 **Online/Offline User Status**  
- 💬 **Real-time Messaging** using Socket.io  
- 📸 **Image & File Uploads** (Cloudinary integration)  
- 📱 **Responsive UI** with React  
- 🔔 **Typing Indicators & Message Notifications**  

---

## 🛠️ Tech Stack 🛠️

**🎨 Frontend:**  
- ⚛️ React.js + ⚡ Vite  
- 🎨 TailwindCSS / CSS  
- 📡 Axios  

**⚙️ Backend:**  
- 🟩 Node.js  
- 🚏 Express.js  
- 🍃 MongoDB + 🧩 Mongoose  
- 📡 Socket.io  
- 🔐 JWT Authentication  
- ☁️ Cloudinary (for media upload)  

**☁️ Deployment:**  
- ▲ Vercel (Frontend + Backend)  
- 🍃 MongoDB Atlas (Database)  

---
📂 Project Structure 
```
QuickChat/
│
├── client/ 🎨   # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── context/
│
├── server/ ⚙️   # Node.js backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── server.js
│
└── README.md 📖
```

## 🚀 Getting Started 🚀

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/QuickChat.git
cd QuickChat
```
## 2️⃣ Setup Backend
```
cd server
npm install
```
Create a .env file inside server/:
```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```
Start backend:
```
npm start
```
## 3️⃣ Setup Frontend
```
cd ../client
npm install
npm run dev
```
## 📝 License 📜

MIT License – Free to use & modify ✅

## 👩‍💻 Author  

**Sanjana Yadav**  
🌐 [GitHub](https://github.com/Sanjanayadav07) | 💼 [LinkedIn](https://www.linkedin.com/in/sanjana-yadav007)  

