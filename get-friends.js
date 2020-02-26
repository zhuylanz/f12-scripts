const aTags = document.querySelectorAll(".clearfix._5qo4 .fsl.fwb.fcb a");
for (let tag of aTags) {
	console.log(tag.text);
}

for (let tag of aTags) {
	console.log(tag.getAttribute("href"));
}
