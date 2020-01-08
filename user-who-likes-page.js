run();

function run() {
	printUsersWhoLikePage();
}

function printUsersWhoLikePage() {
	const nameTags = document.querySelectorAll("._3cb8");
	for (let nameTag of nameTags) {
		console.log(nameTag.innerText);
	}
	for (let nameTag of nameTags) {
		console.log(nameTag.pathname.slice(1));
	}
}
