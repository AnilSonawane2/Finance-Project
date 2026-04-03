const express = require('express');
const rateLimit = require('express-rate-limit');

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const recordRoutes = require("./routes/record.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes, Rate limiting
    max: 100 
});

app.use(limiter);
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/records", recordRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

app.get("/",(req, res) =>{
    res.status(200).json({
        msg : "API is working.."
    })
})

app.use(errorMiddleware);

module.exports = app;