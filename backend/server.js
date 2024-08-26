import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

// importing Routes
import authRoutes from "./routes/auth.routes.js"
import messageRoute from "./routes/message.routes.js"
import userRoute from "./routes/user.routes.js"

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to Mongo_DB");

}).catch((err) => {
    console.log(err);

})

const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World")
})

// Middleware
app.use(express.json())
app.use(cookieParser())

// Routes

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoute)
app.use("/api/users", userRoute)


app.listen(PORT, () => {
    console.log(`Server is runnnig on port ${PORT}`);

})

//error handler
// error middleware should be at the end of the file either server.js or index.js

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
