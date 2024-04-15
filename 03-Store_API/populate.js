// Load the dotenv library to use environment variables from a .env file
require("dotenv").config();

// Import the connectDB function, which is used to connect to the MongoDB database
const connectDB = require("./db/connect");

// Import the Product model to interact with the product collection in MongoDB
const Product = require("./models/product");

// Load the product data from a JSON file located in the same directory
const jsonProducts = require("./products.json");

// Define an asynchronous function named 'start' to handle the database initialization and data loading
const start = async () => {
	try {
		// Connect to the MongoDB using the connection URI stored in the environment variables
		await connectDB(process.env.MONGO_URI);

		// Delete all existing entries in the product collection to prevent duplicates
		await Product.deleteMany();

		// Create new entries in the product collection using the data imported from the JSON file
		await Product.create(jsonProducts);

		// Log a success message to the console if the database operations complete successfully
		console.log("Success!!!!");

		// Exit the process with a success status code (0) indicating that everything went as expected
		process.exit(0);
	} catch (error) {
		// Handle any errors that occur during the database operations
		// Log the error to the console
		console.log(error);

		// Exit the process with an error status code (1) indicating that something went wrong
		process.exit(1);
	}
};

// Execute the start function to run the database initialization and data loading
start();
