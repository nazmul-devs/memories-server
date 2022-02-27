const mongoose = require("mongoose");

// posts schema
const postSchema = mongoose.Schema({
	title: String,
	message: String,
	creator: String,
	tags: [String],
	selectedFile: String,
	likeCount: {
		type: Number,
		default: 0,
	},
	createAt: {
		type: Date,
		default: new Date(),
	},
});

const postMessage = mongoose.model("postMessage", postSchema);

module.exports = postMessage;
