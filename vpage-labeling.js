function startLabeling(number) {
	removeOldLabels();
	createLabels(number);
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

function createLabels(max) {
	for (let i = 1; i <= max; i++) {
		createLabel(i);
	}
}

function createLabel(label) {
	const addButton = "?";
	addButton.click();

	const labelInput = "?";
	labelInput.val(label);

	const okButton = "?";
	okButton.click();
}
