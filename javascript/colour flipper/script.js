let color = [1,2,3,4,5,6,7,8,9,'A','b','c','d','e','f']
console.log(color[3])
let body = document.getElementById('body')
let colorFliper = document.getElementById('color-flipper')
console.log(colorFliper)
let colorName = document.getElementById('color-name')
console.log(colorName)

colorFliper.addEventListener('click', function () {
	let colorGenerator='#'
	for (let i = 0; i < 6; i++){
		colorGenerator += color[randomNumber()]
		console.log(colorGenerator)
	}
	body.style.backgroundColor = colorGenerator
	colorName.textContent=colorGenerator

})
	function randomNumber(){
	return Math.floor(Math.random()*color.length)
}
console.log(randomNumber())