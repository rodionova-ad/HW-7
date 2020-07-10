function movePlayer(e) {
	if (endgame == 3) return;
	if (e.keyCode == 37) {
		youmovex = -1;
		youmovey = 0;
	}
	if (e.keyCode == 39) {
		youmovex = 1;
		youmovey = 0;
	}

	if (e.keyCode == 38) {
		newBullet();
	}
}
