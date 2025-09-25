let value = document.getElementById('value')
colorChanger()
function increase() {
	value.textContent++;
	colorChanger()

}
function decrease() {
	value.textContent--
	colorChanger()
}
function reset() {
		 value.textContent=0
		colorChanger()
	
	}
	function colorChanger() {
		if (value.textContent < 0) {
			value.style.color = 'red'
		}
		else if (value.textContent > 0) {
			value.style.color = 'green'
		}
		else if (value.textContent == 0) {
			value.style.color = 'black'
		}
	}
