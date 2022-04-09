require("dotenv").config();
const mongoose = require("mongoose");
// const url= process.env.URL
const url =
	"mongodb+srv://CodeLab:CodeLabProject@cluster0.lzdw3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
	.connect(url)
	.then(() => {
		console.log("connected to mongoose successfully");
	})
	.catch((error) => {
		console.log(error);
	});

module.exports = mongoose;
