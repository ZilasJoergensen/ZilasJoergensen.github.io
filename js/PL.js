const pageTitle = document.querySelector("#ProjectsListTitle");
const projectCards = document.querySelectorAll(".project");
const goTopLink = document.querySelector("#goTopLink");

if (typeof TimelineMax !== "undefined") {
	const tl = new TimelineMax();

	if (pageTitle) {
		tl.fromTo(
			pageTitle,
			0.65,
			{ autoAlpha: 0, y: -24 },
			{ autoAlpha: 1, y: 0, ease: Power2.easeOut }
		);
	}

	if (projectCards.length > 0) {
		tl.staggerFromTo(
			projectCards,
			0.85,
			{ autoAlpha: 0, y: 48 },
			{ autoAlpha: 1, y: 0, ease: Power2.easeOut },
			0.16,
			pageTitle ? "-=0.2" : 0
		);
	}
}

if (goTopLink) {
	goTopLink.addEventListener("click", (event) => {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });

		if (window.history && window.history.replaceState) {
			const cleanUrl = `${window.location.pathname}${window.location.search}`;
			window.history.replaceState(null, "", cleanUrl);
		}
	});
}