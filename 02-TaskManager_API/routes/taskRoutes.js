const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Task routes are working!");
});

// CRUD tasks:

module.exports = router;
