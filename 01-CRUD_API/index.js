const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

// Requires and initializes dotenv
require("dotenv").config();
const mongoDBPassword = process.env.MongoDB_Password;

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

mongoose
	.connect(`mongodb+srv://enekomartinezm:${mongoDBPassword}@backenddb.vtfptsl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`)
	.then(() => {
		console.log("Connected to MongoDB!");
		app.listen(3000, () => {
			console.log("Server is running on port 3000");
		});
	})
	.catch((err) => console.error("Error connecting to MongoDB", err));
