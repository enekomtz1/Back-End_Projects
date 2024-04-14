const mongoose = require("mongoose");
require("dotenv").config();

const MongoDB_URL = process.env.MongoDB_URL;
const PORT = process.env.PORT;

mongoose
	.connect(MongoDB_URL)
	.then(() => {
		console.log("Connected to MongoDB!");
	})
	.catch((err) => console.error("Error connecting to MongoDB", err));
