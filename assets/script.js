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
let position = 0
const chemin = "./assets/images/slideshow/"
let img = document.querySelector(".banner-img")
let p = document.querySelector("#banner p")
let dots = document.querySelector(".dots")

// création de l'eventlistener

let arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", ()=> {
	let dot = dots.children[position]
	dot.classList.remove("dot_selected")
	if (position === slides.length - 1 ) {
		position = 0
	} else {position++}
	let slide = slides[position]
	let srcImg = chemin + slide.image
	img.setAttribute("src", srcImg)
	let tagLine = slide.tagLine
	p.innerHTML = tagLine
	dot = dots.children[position]
	dot.classList.toggle("dot_selected")
})

let arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click", ()=> {
	let dot = dots.children[position]
	dot.classList.remove("dot_selected")
	if (position === 0 ) {
		position = slides.length - 1
	} else {position--}
	let slide = slides[position]
	let srcImg = chemin + slide.image
	img.setAttribute("src", srcImg)
	let tagLine = slide.tagLine
	p.innerHTML = tagLine
	dot = dots.children[position]
	dot.classList.toggle("dot_selected")
})

// création des dots

let totalDot = slides.length
for (let i = 0; i < totalDot; i++) {
	let dot = document.createElement("div")
	let divdots = document.querySelector(".dots")
	divdots.appendChild(dot)
	dot.classList.add("dot")
	if (i===position) {
		dot.classList.add("dot_selected")
	}
}

// Active
let activeSlide = 0


// let dotActiv = document.querySelector(".dot")
// console.log(dotActiv)
// relier le dot à l'image en cours avec la classe spécifique
// let dot = document.querySelector(".dot")
// if (slides[0]) {
// 	let dotActiv = document.querySelector(".dot")
// 	dotActiv.classList.add("dot_selected")
// } 





