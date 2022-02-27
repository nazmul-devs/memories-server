// External import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoute = require("./routes/posts.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware===========
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

// route==============
app.use("/posts", postRoute);

const CONNECTION_URL =
	"mongodb+srv://memories:memories668@cluster0.f4mgp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// connected with mongoose
mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((err) => console.log(err.message));
