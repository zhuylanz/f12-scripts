async function startLabeling(number) {
	// 	removeOldLabels();
	await createLabels(number);
}

function removeOldLabels() {
	const deleteButtons = $("?");
	for (let deleteButton of deleteButtons) {
		removeLabel(deleteButton);
	}
}

function removeLabel(deleteButton) {
	deleteButton.click();
	const okButton = "?";
	okButton.click();
}

async function createLabels(max) {
	for (let i = 29; i <= max; i++) {
		await createLabel(i);
	}
}

async function createLabel(label) {
	const addButton = $(
		"button.md-raised.md-green.md-sm.no-margin.md-button.md-ink-ripple"
	);
	addButton.click();

	await sleep(2);

	const labelInput = $("input[ng-model='tagName']");
	labelInput.val(label);

	await sleep(2);

	const okButton = $("button[ng-click='ok()']");
	okButton.click();

	await sleep(2);
}

function sleep(second) {
	return new Promise(res => {
		setTimeout(() => res(`slept ${second} second`), second * 1000);
	});
}
