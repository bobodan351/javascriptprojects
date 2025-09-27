let next = document.getElementById('next')
let img =document.getElementById('img')
let prev = document.getElementById('prev')
let images = ['img1.jpg', 'img2.jpg', 'img3.jpg']
let content = 0;
console.log(images.length)
next.addEventListener('click', () => {
	content++
	if (content >= images.length) {
		content=0
	}
	
	images[content]
	img.src = images[content]
	console.log(images[content])
})
prev.addEventListener('click', () => {
	content--;
	if (content<0) content=images.length-1
	img.src = images[content]
});

