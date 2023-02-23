function toggleMode(){
	const html = document.documentElement
	html.classList.toggle("light")
	const img = document.querySelector("#profile img")
	const alt = document.querySelector("#profile img")

if(html.classList.contains("light")){
		img.setAttribute("src", "./assets/avatar-light.png")
		alt.setAttribute("alt", "Caroline Vieira profile picture she is with sunglasses in a florest beside a wild dog")
	} else {
		img.setAttribute("src", "./assets/avatar-dark.png")
		alt.setAttribute("alt", "Caroline Vieira profile picture in black shirt and purple coat")
	}
}
