run();

async function run() {
	let retries = 0;
	while (retries < 3) {
		await getAndClickInvites();
		await loadMore();
		if (!isMore()) {
			retries += 1;
		}
	}
	console.log("> done");
}

function isMore() {
	const seeMoreButton = document.querySelectorAll(
		"a.pam.uiBoxLightblue.uiMorePagerPrimary"
	)[1];
	if (seeMoreButton) {
		return true;
	}
	return false;
}

async function getAndClickInvites() {
	let inviteButtonArr = [];

	document.querySelectorAll("a._42ft._4jy0._4jy3._517h._51sy").forEach(el => {
		if (el.textContent == "Invite" || el.textContent == "Mời") {
			inviteButtonArr.push(el);
		}
	});

	for (let el of inviteButtonArr) {
		el.click();
		console.log("invited!");
		await sleep(0.5);
	}
}

async function loadMore() {
	const isMore = document.querySelectorAll(
		"a.pam.uiBoxLightblue.uiMorePagerPrimary"
	)[1];

	if (isMore) {
		isMore.click();
		console.log("load more!");
	}

	await sleep(1);
}

function sleep(second) {
	return new Promise(res => {
		setTimeout(() => res(`slept ${second} second`), second * 1000);
	});
}
