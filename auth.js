var client_id = "053283c91136416abf44e6c9665fd915";
var client_secret = "3c2cff3bc6354120be6e2656b02c19dc";

var authOptions = {
	url: "https://accounts.spotify.com/api/token",
	headers: {
		Authorization:
			"Basic " +
			new Buffer.from(client_id + ":" + client_secret).toString("base64"),
	},
	form: {
		grant_type: "client_credentials",
	},
	json: true,
};

request.post(authOptions, function (error, response, body) {
	if (!error && response.statusCode === 200) {
		var token = body.access_token;
	}
});
