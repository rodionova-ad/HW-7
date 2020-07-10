function newBullet() {
	buls.push({
		x: youx,
		y: youy,
	});
}

function newEBullet(i) {
	ebuls.push({
		x: enemies[i].x + Math.floor(imgx[3] / 2),
		y: enemies[i].y + imgy[3] + 2,
	});
}

function moveBullets() {
	for (var i = buls.length - 1; i >= 0; i--) {
		buls[i].y -= 7 + lvl;
		for (var j = enemies.length - 1; j >= 0; j--)
			if (clsEnemyAndBullet(j, i) == 1) return 1;
		if (buls[i].y < -40) buls.splice(i, 1);
	}
}

function moveEBullets() {
	for (var i = ebuls.length - 1; i >= 0; i--) {
		ebuls[i].y += 7 + lvl;
		if (clsPlayerAndBullet(i) == 1) return 1;

		if (ebuls[i].y > 550) ebuls.splice(i, 1);
	}
}
