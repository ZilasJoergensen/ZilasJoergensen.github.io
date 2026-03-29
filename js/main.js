const languageIcons = [
	{
		name: "C++",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
	},
	{
		name: "Java",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
	},
	{
		name: "Delphi",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/delphi/delphi-original.svg"
	},
	{
		name: "Python",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
	},
	{
		name: "SQLite",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
	},
	{
		name: "Rust",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg"
	},
	{
		name: "JavaScript",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
	}
];

function renderLanguageIcons() {
	const iconGrid = document.getElementById("lang-grid");
	if (!iconGrid) {
		return;
	}

	const iconMarkup = languageIcons
		.map(
			(icon) => {
				const rustClass = icon.name === "Rust" ? " is-rust" : "";
				return `<li class="lang-grid-item${rustClass}" title="${icon.name}"><img src="${icon.src}" alt="${icon.name} logo" loading="lazy" referrerpolicy="no-referrer"></li>`;
			}
		)
		.join("");

	iconGrid.innerHTML = iconMarkup;
}

renderLanguageIcons();
 