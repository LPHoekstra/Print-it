const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// arrow
const arrows = document.querySelectorAll("#banner .arrow") 
arrows.forEach(arrow => {
	arrow.addEventListener("click", () => {
		handleSlideChange(arrow)
	})
})

// dots
const dots = document.querySelector(".dots")
slides.forEach(() => {
	dots.innerHTML += "<div class='dot'></div>"
})

// change slide
let currentSlide = document.querySelector(".banner-img")
const dot = document.querySelectorAll(".dot")
let currentSlideNumber = 0
dot[currentSlideNumber].classList.add("dot_selected") // set the first selected dot


function handleSlideChange(element) {
	if (element.classList.contains("arrow_right")) {
		currentSlideNumber++
		changeSlide()
	} else {
		currentSlideNumber--
		changeSlide()
	}
}

function changeSlide() {
	currentSlide.src = "./assets/images/slideshow/" + slides[currentSlideNumber]["image"]
	let previousDot = document.querySelector(".dot_selected")
	previousDot.classList.remove("dot_selected")
	dot[currentSlideNumber].classList.add("dot_selected")
}