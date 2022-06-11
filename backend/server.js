const express = require("express");
const dotenv = require("dotenv");
//const res = require("express/lib/response");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const {notFound,errorHandler}=require('./middlewares/errorMiddleware');
// const userModel = require("/.models/userModel")

dotenv.config();
connectDB()
const app = express();

app.use(express.json()); //to accept JSON data

app.get('/',(req,res) => {
    res.send("API is running");
});

app.get('/api/chat',(req,res) => {
    res.send(chats);
})

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)



app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(5000,console.log(`Server started on PORT ${PORT}`.yellow.bold));