function getRandomArbitrary(min = 1, max = 4) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ImagesInit() {
	for (var i = 0; i <= 4; i++) {
		var tmp = new Image();
		tmp.src = imgstr[i];
		imgs.push(tmp);
	}
}