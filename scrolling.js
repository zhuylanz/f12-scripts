let keepDoing = true;

async function run() {
	while (keepDoing == true) {
		await sleep(2);
		window.scrollTo(0, document.body.scrollHeight);
	}
}

function sleep(second) {
	return new Promise(res => {
		setTimeout(() => res(`slept ${second} second`), second * 1000);
	});
}
