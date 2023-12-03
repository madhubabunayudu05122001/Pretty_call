const express = require('express');
require("dotenv").config();
const cors = require('cors');
const app = express();

const connection = require('./db.js');
const userRoutes = require('./routes/users.js');
const authRoutes = require('./routes/auth.js');
connection();
app.use(express.json());
app.use(cors());
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`server Running at PORT ${PORT}`);

});