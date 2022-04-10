let r = document.querySelector(":root");
let enabled = false;

let darkBackground = "#121212";
let darkSurface = "#2f2f2f";
let darkText = "#fff";
let darkHover = "#222222";

let whiteBackground = "#FFF";
let whiteSurface = "#c7c7c7";
let whiteText = "#000";
let whiteHover = "#c8c8c8";

let currentSurface = darkSurface;
let currentBackground = darkBackground;
let currentText = darkText;
let currentHover = darkHover;

update();

chrome.runtime.onMessage.addListener((msg, sender, response) => {
	if (msg.command === "enable") {
		enabled = true;
		currentSurface = darkSurface;
		currentBackground = darkBackground;
		currentText = darkText;
		currentHover = darkHover;
		update();
	} else if (msg.command === "disable") {
		enabled = false;
		currentSurface = whiteSurface;
		currentBackground = whiteBackground;
		currentText = whiteText;
		currentHover = whiteHover;
		update();
	}
});

setInterval(() => {
	r.style.setProperty("--ds-background-neutral-subtle-hovered", currentHover); //card hover
	r.style.setProperty("--ds-text", currentText); //text
	r.querySelector("body").style.backgroundColor = currentBackground;

	changeBackground(".css-1yfnrso", currentBackground);
	changeBackground(".derbhP", currentSurface);
	changeBackground(
		".timesheet-table-module__nonWorking___aRYz6",
		currentBackground
	);
	changeBackground(
		".timesheet-table-module__highlight___3Qvls",
		currentBackground
	);
	changeColor(".timesheet-table-module__sidebarCell___o7PCU", currentText);
	changeColor(".gjCDIs", currentText);
	changeColor(".dqHXQe", currentText);

	changeColor(".dwYBpi", currentText);
	changeColor(".dqHXQe", currentText);

	changeBackground(".lnnurR", currentBackground);
	changeBackground(".bmZWJP", currentBackground);

	//document.querySelector('.bmZWJP').style.borderRadius = "5px"
	changeBackground(".llCsQv", currentSurface);
	changeBackground(".iHzmoo", currentBackground);
	changeBackground(".eCVjDy", currentBackground);
	changeColor(".css-1yfnrso", currentText);
	changeColor(".eVxQWi", currentBackground);
	changeColor(".css-zr2hs3", currentText);
	changeColor(".kBHNQp", currentText);
	changeBackground(".llCsQv", currentHover);
	changeBackground(".jIuwsn", currentSurface);
	changeBackground(".jAfoQQ", currentSurface);
	changeBackground(".css-1459m70", currentSurface);

	let divs = Array.from(document.querySelectorAll("div"));
	let arr = divs.filter(
		div =>
			document.defaultView.getComputedStyle(div, null).backgroundColor ===
			"rgb(255, 255, 255)"
	);
	arr.forEach(div => {
		div.style.backgroundColor = currentBackground;
	});

	/*arr = divs.filter(
		div =>
			document.defaultView.getComputedStyle(div, null).backgroundColor !==
			("rgb(18, 18, 18);" || "rgb(47, 47, 47)")
	);
	arr.forEach(div => {
		div.style.backgroundColor = currentBackground;
	});*/

	let ps = Array.from(document.querySelectorAll("p"));
	arr = ps.filter(
		p =>
			document.defaultView.getComputedStyle(p, null).color !==
			"rgb(255, 255, 255)"
	);
	arr.forEach(p => {
		p.style.color = currentText;
	});
}, 150);

function changeBackground(name, color) {
	let temp = document.querySelector(name);
	if (!!temp) temp.style.backgroundColor = color;
}
function changeColor(name, color) {
	let temp = document.querySelector(name);
	if (!!temp) temp.style.color = color;
}

function update() {
	r.style.setProperty("--ds-surface-sunken", currentSurface); //card holder
	r.style.setProperty("--ds-surface-raised", currentBackground); // cards
	r.style.setProperty("--ds-background-default", currentSurface); //background sidebars
	r.style.setProperty("--ds-background-selected-resting", currentSurface); //sidebar item hover
	r.style.setProperty("--ds-text-selected", currentText); //sidebar text hover
	r.style.setProperty("--ds-text-subtle", currentText); //sidebar header text
	r.style.setProperty("--ds-text-mediumEmphasis", currentText); //sidebar rest text
	r.style.setProperty("--ds-text-subtlest", currentText); //random texte
	r.style.setProperty("--ds-text-highEmphasis", currentText); //threadt überschrift
	r.style.setProperty("--ds-background-neutral", currentHover); //n paar epics, selection boxes
	r.style.setProperty("--ds-text", currentText); //text
	r.style.setProperty("--ds-background-neutral-hovered", currentSurface); //on hover selection boxes
	r.style.setProperty("--ds-surface", currentBackground); //background
	r.style.setProperty("--ds-background-input", currentSurface); //searchbar innen
	r.style.setProperty("--ds-text-lowEmphasis", currentText); //cardholder title
	r.style.setProperty("--ds-surface-overlay", currentSurface); //background von pics
	r.style.setProperty("--ds-border", currentSurface); //borders von cards in backlog
	r.style.setProperty(
		"--ds-background-subtleNeutral-resting",
		currentBackground
	); //zeittext hintergrund
	r.style.setProperty("--ds-background-neutral-subtle-hovered", currentHover); //card hover
	r.style.setProperty("--ds-background-selected", currentBackground); //card press
	r.style.setProperty("--ds-text-subtle", currentText); //text
}
