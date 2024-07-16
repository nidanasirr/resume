function toggleDarkMode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	if (element.classList.contains("dark-mode")) {
		localStorage.setItem("darkMode", "enabled");
	} else {
		localStorage.setItem("darkMode", "disabled");
	}
}

function applyDarkModePreference() {
	if (localStorage.getItem("darkMode") === "enabled") {
		document.body.classList.add("dark-mode");
	}
}

// Apply the user's dark mode preference on page load
applyDarkModePreference();
