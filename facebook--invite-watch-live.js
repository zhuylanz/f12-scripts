main();

async function main() {
	inviteSuggestedUsers();
	const names = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
		"ch",
		"đ",
		"ha",
		"hi",
		"ho",
		"hu",
		"kh",
		"kha",
		"kho",
		"khu",
		"la",
		"li",
		"lo",
		"lu",
		"ly",
		"ng",
		"ngh",
		"nh",
		"nha",
		"nhi",
		"nhu",
		"ph",
		"phi",
		"pho",
		"phu",
		"th",
		"tha",
		"thi",
		"tho",
		"thu",
		"ti",
		"to",
		"tr",
		"tra",
		"tri",
		"tru",
		"tu",
		"ty"
	];

	// for (let name of names) {
	// 	typeIn(name);
	// 	await sleep(0.4);
	// 	inviteSuggestedUsers();
	// 	await sleep(0.4);
	// }
}

function typeIn(text) {}

function inviteSuggestedUsers() {
	const buttons = document.querySelectorAll(
		"._3b8a._4jy0._4jy3._517h._51sy._42ft"
	);

	for (let button of buttons) {
		button.click();
	}
}

function sleep(second) {
	return new Promise((res) => {
		setTimeout(() => res(`slept ${second} second`), second * 1000);
	});
}
