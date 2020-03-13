var aTags = document.querySelectorAll(".clearfix._5qo4 .fsl.fwb.fcb a");
for (let tag of aTags) {
	console.log(tag.text);
}

for (let tag of aTags) {
	if (tag.getAttribute("href") != "#") {
		console.log(JSON.parse(tag.getAttribute("data-gt")).engagement.eng_tid);
	} else {
		console.log("#");
	}
}
