const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get("/api/roducts", (req, res) => {
	res.status(200).json("list of products");
});
