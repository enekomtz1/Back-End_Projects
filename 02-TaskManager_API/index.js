const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
	res.send("Task Manager API is working!");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
