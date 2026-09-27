const express = require("express");
const app = express();
const PORTNO = 3000;

// ** Required Middlewate
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));


//*** Routes
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/search", function (req, res){
	const keyword = req.query.keyword;

res.send(`
	<h2>Search Results</h2>
	<p>You Searched for: ${keyword}</p>
	`);
});

app.post("/register", function (req, res){
	const username = req.body.username;
	const email = req.body.email;

	res.send(`
		<h2>Registration Complete</h2>
		<p>Username: ${username}</p>
		<p>Email: ${email}</p>
	`);
});
	

app.listen(PORTNO, function () {
  console.log(`Listening on Port: ${PORTNO}`);
});

