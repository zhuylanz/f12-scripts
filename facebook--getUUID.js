alert(
	document
		.querySelector("meta[property='al:android:url']")
		.content.match(/\d{5,15}/g)[0]
);
