const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection With MongoDB
mongoose.connect("mongodb+srv://blaztted:<Total90000>@cluster0.ykp8wyv.mongodb.net/e-commerce"); //provavelmente tenho que trocar o path "e-commerce" no final
