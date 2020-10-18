document.getElementById("quoteSubmit").addEventListener("click", function(event) {
  event.preventDefault();
	const value = document.getElementById("quoteNumberInput").value;


	const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/" + value;
	fetch(url)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			let results = "";
			results += "<h2>Quotes</h2>";
			if (value === "") {
				results += "<p><strong>Quote #1: </strong>\"" + json[0] + "\"</p>";
			}
			else {
				for (let i=0; i < value; i++) {
					results += "<p><strong>Quote #" + (i+1) + ":</strong> \"" + json[i] + "\"</p>";
				}
			}
			document.getElementById("quoteResults").innerHTML = results;
		});
});
