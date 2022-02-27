const postMessage = require("../modules/postMessage.js");

const getPosts = async (req, res) => {
	try {
		const postMessage = await postMessage.find();
		res.status(200).json(postMessage);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

// create posts
const createPost = async (req, res) => {
	const body = req.body;
	const newPost = new postMessage(post);
	try {
		await newPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports = { getPosts, createPost };
