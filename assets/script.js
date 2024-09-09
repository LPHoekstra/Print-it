import { slides } from "./slides.js"

// listening click on arrow
const arrows = document.querySelectorAll("#banner .arrow") 
arrows.forEach(arrow => {
	arrow.addEventListener("click", () => {
		handleSlideChange(arrow)
	})
})

// creating dot div according to number of slides
const dots = document.querySelector(".dots")
slides.forEach((slide, index) => {
	const dot = document.createElement("div")
	dot.classList.add("dot")
	dot.id = `dot-${index}`
	dots.appendChild(dot)
})

// initiate currentSlide, dot and currentSlideNumber
let currentSlide = document.querySelector(".banner-img")
const dot = document.querySelectorAll(".dot")
let currentSlideNumber = 0
dot[currentSlideNumber].classList.add("dot_selected") // set the first selected dot

// when click on a dot it change to the correct slide
dot.forEach(event => {
	event.addEventListener("click", () => {
		currentSlideNumber = event.id.split("-")[1]
		changeSlide()
	})
})

// function
function handleSlideChange(element) {
	if (element.classList.contains("arrow_right")) {
		currentSlideNumber++
		if (currentSlideNumber > 3) {
			currentSlideNumber = 0
		}

		changeSlide()
	} else {
		currentSlideNumber--
		if (currentSlideNumber < 0) {
			currentSlideNumber = 3
		}

		changeSlide()
	}
}

function changeSlide() {
	let contentSlide = document.querySelector("#banner > p")
	let previousDot = document.querySelector(".dot_selected")
	
	currentSlide.src = "./assets/images/slideshow/" + slides[currentSlideNumber]["image"]
	contentSlide.innerHTML = slides[currentSlideNumber]["tagLine"]

	previousDot.classList.remove("dot_selected")
	dot[currentSlideNumber].classList.add("dot_selected")
}
