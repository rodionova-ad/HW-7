var 
	imgstr,
	imgx,
	imgy,
	imgs,
	youx,
	youy,
	youstepx,
	youstepy,
	youmovex,
	youmovey,
	buls,
	ebuls,
	enemies,
	score,
	endgame,
	tcount,
	time,
	dispID,
	lvl;

var name = prompt("Введите ваше имя", 'Я');

function newGame() {
	imgstr = [
		"1.jpg", 
		"2.png", 
		"3.png", 
		"4.png", 
		"5.png"
	];
	imgx = [
		800, 
		75, 
		21, 
		100, 
		15
	];
	imgy = [
		600, 
		75, 
		35, 
		85, 
		50
	];
	
	imgs     = [];
	youx     = 100;
	youy     = 400;
	youstepx = 4;
	youstepy = 3;
	youmovex = 0;
	youmovey = 0;
	buls     = [];
	ebuls    = [];
	enemies  = [];
	score    = 0;
	endgame  = 0;
	tcount   = 0;
	time     = 30;
	lvl      = 0;

	ImagesInit();
	timer();
}

function timer() {
	if (endgame == 3) 
		return;
	tcount++;

	if (youx >= 800 - 5 - imgx[1]) {
		youmovex = -1;
		youmovey = 0;
	}
	if (youx <= 0 + 5) {
		youmovex = 1;
		youmovey = 0;
	}
	if (youy >= 600 - 5 - imgy[1]) {
		youmovey = -1;
		youmovex = 0;
	}
	if (youy <= 200 + 5) {
		youmovey = 1;
		youmovex = 0;
	}

	youx += youmovex * youstepx;
	youy += youmovey * youstepy;

	if (tcount % 50 == 0) {
		for (var i = 0; i < enemies.length; i++) {
			if (Math.random() < 0.2 + Math.min(0.1, 0.001 * (tcount % 100)))
				newEBullet(i);
		}
	}

	moveBullets();

	if (moveEBullets() == 1) 
		return;

	newEnemies();

	document.onkeydown = movePlayer;

	draw();
	dispID = setTimeout("timer();", time);
}

function draw() {
	ImagesInit();
	var cnv = document.getElementById("canvas");
	var ctx = cnv.getContext("2d");

	ctx.drawImage(imgs[0], 0, 0);
	ctx.drawImage(imgs[1], youx, youy, 70, 70);

	for (var i = 0; i < buls.length; i++) {
		ctx.drawImage(imgs[2], buls[i].x, buls[i].y);
	}

	for (var i = 0; i < enemies.length; i++) {
		ctx.drawImage(imgs[3], enemies[i].x, enemies[i].y, 69, 63);
	}

	for (var i = 0; i < ebuls.length; i++) {
		ctx.drawImage(imgs[4], ebuls[i].x, ebuls[i].y);
	}
	
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "bold 20pt Arial";
	ctx.fillText("Очки: " + score + "", 20, 30);
	ctx.fillText("Жизни: " + (3 - endgame) + "", 220, 30);
	ctx.fillText("Игрок: " + name, 420, 30);
	ctx.fillText("Уровень: " + lvl, 620, 30);
}

function lvlplus() {
	lvl += 1;
}

function stop() {
	clearInterval(dispID);
}

function resume() {
	timer();
}

function newGamer() {
	stop();
	localStorage.setItem(name, score);
	name = prompt("Введите новое имя", "Я");
	newGame();
}
