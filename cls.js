function clsEnemyAndBullet(i, j) {
	var x1 = enemies[i].x,
		y1 = enemies[i].y;

	var x2 = buls[j].x,
		y2 = buls[j].y;

	if (
		x2 + imgx[2] > x1 &&
		x1 + imgx[3] > x2 &&
		y2 + imgy[2] > y1 &&
		y1 + imgy[3] > y2
	) {
		if (enemies[i].hp == 1) {
			enemies.splice(i, 1);
			score += 10;
			lvlplus();
		} else {
			enemies[i].hp--;
		}
		buls.splice(j, 1);
		return 1;
	}
	return 0;
}

function clsPlayerAndBullet(j) {
	var x1 = youx,
		y1 = youy;
	var x2 = ebuls[j].x,
		y2 = ebuls[j].y;

	if (
		x2 + imgx[4] > x1 &&
		x1 + imgx[1] > x2 &&
		y2 + imgy[4] > y1 &&
		y1 + imgy[1] > y2
	) {
		endgame++;
		ebuls.splice(0, ebuls.length);
		if (endgame == 3) {
			localStorage.setItem(name, score);

			alert("Вы набрали " + score + " очков.");

			displayTable();
			newGame();
			return 1;
		}
		timer();
	}
	return 0;
}
