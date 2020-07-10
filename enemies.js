function newEnemies() {
	if (enemies.length > 0) return;

	for (var i = 0; i < 5; i++) {
		enemies.push({
			x: i * 160 + 20,
			y: 100,
			hp: getRandomArbitrary() + Math.floor(lvl / 5),
		});
	}
}
