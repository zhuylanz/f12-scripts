const profileUUID = JSON.parse(
	document.querySelector("div._5h60").attributes["data-gt"].value
).profile_owner;

alert(profileUUID);
