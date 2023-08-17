// function startGame() {
// 	alert("Game started!");

let px = 50;
let py = 330;
let ground = false;
let pySpeed = 0;
let r;
let g;
let b;
let down = true;
let thingsMove = 3;
let gameStarted = false;

//States
let state = 0;

//Walls
let wall1;
let wall2;
let wall3;
let wall4;
let wall5;
let wall6;
let wall7;
let wall8;
//cellings
let celling1;
let celling2;
//Platforms
let plat1;
let plat2;
//Triangles
let tri1;
//Portals
let portal1;
//Finish
let finishX = 2500;

function setup() {
	createCanvas(500, 500);
	// noLoop();
	noStroke();
	//
	wall1 = new Wall(650, 350, 75);
	wall2 = new Wall(750, 300, 75);
	wall3 = new Wall(850, 250, 75);
	wall4 = new Wall(950, 300, 75);
	wall5 = new Wall(1050, 350, 75);
	wall6 = new Wall(1350, 350, 150);
	//wall7= new Wall();
	//
	celling1 = new Celling(950, 0, 75, 160);
	celling2 = new Celling(1350, 200, 100, 40);
	//
	plat1 = new Platform(1575, 315, 125, 30);
	plat2 = new Platform(1750, 275, 125, 30);
	//
	tri1 = new Spike(2300, 30, -30, 10);
	//
	portal1 = new Portal(1880, 100, 60, 175, false);
}
function draw() {
	if (!gameStarted) return;
	if (state == 0) {
		background(2, 158, 242);
		textSize(30);
		text("Welcome to ", 160, 50);
		textSize(50);
		text("Rect(D,a,s,h)!", 96, 130);
		textSize(20);
		text("*Use the Up Arrow or Mouse to jump*", 85, 220);
		strokeWeight(5);
		stroke(0, 255, 0);
		fill(0, 200, 120);
		rect(100, 300, 300, 150);
		textSize(50);
		fill(0);
		text("START", 170, 390);
		noStroke();
	}
	if (state == 1) {
		background(30, 100, 220);
		fill(0);
		rect(0, 365, 500, 200);
		py += pySpeed;

		if (down == true) {
			if (px < 205) {
				px += 3;
			}
			if (py == 330) {
				ground = true;
				pySpeed = 0;
			}
			if (py < 330) {
				ground = false;
			}
			if (py < 330) {
				pySpeed = 3;
			}
		}
		if (down == false) {
			if (px < 205) {
				px += 3;
			}
			if (py == 0) {
				ground = true;
				pySpeed = 0;
			}
			if (py > 0) {
				ground = false;
			}
			if (py > 0) {
				pySpeed = -3;
			}
		}
		//
		function makeWall(anyWall) {
			fill(0);
			rect(
				anyWall.wallXPos,
				anyWall.wallYPos,
				anyWall.wallDepth,
				anyWall.wallHeight
			);
			anyWall.wallXPos -= thingsMove;
			if (
				anyWall.wallXPos - 45 < px &&
				px < anyWall.wallXPos + anyWall.wallDepth &&
				py + 45 > anyWall.wallYPos
			) {
				pySpeed = 0;
				ground = true;
			}
			if (
				anyWall.wallXPos < px + 45 &&
				px + 45 < anyWall.wallXPos + 10 &&
				py + 45 > anyWall.wallYPos
			) {
				state = 2;
			}
		}

		function makeCelling(anyCelling) {
			fill(0);
			rect(
				anyCelling.cellingXPos,
				anyCelling.cellingYPos,
				anyCelling.cellingDepth,
				anyCelling.cellingHeight
			);
			anyCelling.cellingXPos -= thingsMove;
			if (
				anyCelling.cellingXPos < px + 45 &&
				anyCelling.cellingXPos + 10 > px + 45 &&
				py < anyCelling.cellingYPos + anyCelling.cellingHeight
			) {
				state = 2;
			}
		}
		function makePlatform(anyPlat) {
			fill(0);
			rect(
				anyPlat.platXpos,
				anyPlat.platYpos,
				anyPlat.platDepth,
				anyPlat.platHeight
			);
			anyPlat.platXpos -= thingsMove;
			if (
				anyPlat.platXpos - 45 < px &&
				px < anyPlat.platXpos + anyPlat.platDepth &&
				py + 45 > anyPlat.platYpos
			) {
				pySpeed = 0;
				ground = true;
			}
			if (
				anyPlat.platXpos < px + 45 &&
				px + 45 < anyPlat.platXpos + 10 &&
				py + 45 > anyPlat.platYpos
			) {
				state = 2;
			}
		}
		function makeSpike(anySpike) {
			fill(255, 0, 0);
			triangle(
				anySpike.triX1,
				anySpike.triY1,
				anySpike.triX2,
				anySpike.triY2,
				anySpike.triX3,
				anySpike.triY3
			);
			anySpike.triX1 -= thingsMove;
			anySpike.triX2 -= thingsMove;
			anySpike.triX3 -= thingsMove;
			if (
				anySpike.triX3 < px + 45 &&
				anySpike.triX3 > px &&
				anySpike.triY3 < py + 50 &&
				anySpike.triY3 > py - 5
			) {
				state = 2;
			}
			if (
				anySpike.triX1 < px + 45 &&
				anySpike.triX1 > px &&
				anySpike.triY1 < py + 45 &&
				anySpike.triY1 > py
			) {
				state = 2;
			}
		}
		function makePortal(anyPortal) {
			fill(66, 182, 218);
			rect(
				anyPortal.portalX,
				anyPortal.portalY,
				anyPortal.portalDepth,
				anyPortal.portalHeight
			);
			anyPortal.portalX -= thingsMove;
			if (px + 30 > anyPortal.portalX && px < anyPortal.portalX) {
				down = anyPortal.upDown;
			}
		}

		makeWall(wall1);
		makeWall(wall2);
		makeWall(wall3);
		makeWall(wall4);
		makeWall(wall5);
		makeWall(wall6);

		makeCelling(celling1);
		makeCelling(celling2);

		makePlatform(plat1);
		makePlatform(plat2);

		makeSpike(tri1);

		makePortal(portal1);
		finishX -= thingsMove;
		// fill(0);
		// rect(finishX,0,100,500)
		for (let i = 0; i < 375; i += 50) {
			fill(0);
			rect(finishX, i, 25, 25);
		}
		for (let i = 25; i < 375; i += 50) {
			fill(255);
			rect(finishX, i, 25, 25);
		}
		for (let i = 0; i < 375; i += 50) {
			fill(255);
			rect(finishX + 25, i, 25, 25);
		}
		for (let i = 25; i < 375; i += 50) {
			fill(0);
			rect(finishX + 25, i, 25, 25);
		}
		if (px > finishX + 25) {
			state = 3;
		}
		fill(255, 0, 0);
		rect(px, py, 45, 45);
		if (state == 2) {
			finishX = 2500;
			down = true;
			px = 50;
			py = 330;
			pySpeed = 0;
			state = 1;
			wall1 = new Wall(650, 350, 75);
			wall2 = new Wall(750, 300, 75);
			wall3 = new Wall(850, 250, 75);
			wall4 = new Wall(950, 300, 75);
			wall5 = new Wall(1050, 350, 75);
			wall6 = new Wall(1350, 350, 150);
			//wall7= new Wall();
			//
			celling1 = new Celling(950, 0, 75, 160);
			celling2 = new Celling(1350, 200, 100, 40);
			//
			plat1 = new Platform(1575, 315, 125, 30);
			plat2 = new Platform(1750, 275, 125, 30);
			//
			tri1 = new Spike(2300, 30, -30, 10);
			//
			portal1 = new Portal(1880, 100, 60, 175, false);
		}
		if (state == 3) {
			background(0, 200, 100);
			fill(0);
			text("WELL DONE!", 95, 110);
			textSize(30);
			text("Want To Go Another Round?", 70, 180);
			strokeWeight(5);
			stroke(0, 255, 0);
			fill(20, 150, 20);
			rect(100, 250, 300, 150);
			textSize(50);
			fill(0);
			text("GO AGAIN?", 116, 340);
			noStroke();
		}
		if (down == true) {
			if (keyIsDown(UP_ARROW)) {
				if (ground == true) {
					py -= 90;
				}
			}
		}
		if (down == false) {
			if (keyIsDown(DOWN_ARROW)) {
				if (ground == true) {
					py += 90;
				}
			}
		}
	}
}
function mouseClicked() {
	if (state == 1) {
		if (down == true) {
			if (ground == true) {
				py -= 90;
			}
		}
		if (down == false) {
			if (ground == true) {
				py += 90;
			}
		}
	}
	if (state == 0) {
		if (mouseX > 100 && mouseY > 300 && mouseX < 400 && mouseY < 450) {
			state = 1;
		}
	}
	if (state == 2 || state == 3) {
		if (mouseX > 100 && mouseY > 250 && mouseX < 400 && mouseY < 400) {
			finishX = 2500;
			down = true;
			px = 50;
			py = 330;
			state = 1;
			wall1 = new Wall(650, 350, 75);
			wall2 = new Wall(750, 300, 75);
			wall3 = new Wall(850, 250, 75);
			wall4 = new Wall(950, 300, 75);
			wall5 = new Wall(1050, 350, 75);
			wall6 = new Wall(1350, 350, 150);
			//wall7= new Wall();
			//
			celling1 = new Celling(950, 0, 75, 160);
			celling2 = new Celling(1350, 200, 100, 40);
			//
			plat1 = new Platform(1575, 315, 125, 30);
			plat2 = new Platform(1750, 275, 125, 30);
			//
			tri1 = new Spike(2300, 30, -30, 10);
			//
			portal1 = new Portal(1880, 100, 60, 175, false);
		}
	}
}

class Wall {
	constructor(wallXPos, wallYPos, wallDepth) {
		this.wallXPos = wallXPos;
		this.wallYPos = wallYPos;
		this.wallDepth = wallDepth;
		this.wallHeight = 375 - wallYPos;
	}
}
class Celling {
	constructor(cellingXPos, cellingYPos, cellingDepth, cellingHeight) {
		this.cellingXPos = cellingXPos;
		this.cellingYPos = cellingYPos;
		this.cellingDepth = cellingDepth;
		this.cellingHeight = cellingHeight;
	}
}

class Platform {
	constructor(platXpos, platYpos, platDepth, platHeight) {
		this.platXpos = platXpos;
		this.platYpos = platYpos;
		this.platHeight = platHeight;
		this.platDepth = platDepth;
	}
}
class Spike {
	constructor(triTX, triTY, triHeight, triLength) {
		this.triX1 = triTX;
		this.triY1 = triTY;
		this.triX2 = triTX + triLength;
		this.triY2 = triTY + triHeight;
		this.triX3 = triTX - triLength;
		this.triY3 = triTY + triHeight;
	}
}
class Portal {
	constructor(portalX, portalY, portalDepth, portalHeight, upDown) {
		this.portalX = portalX;
		this.portalY = portalY;
		this.portalHeight = portalHeight;
		this.portalDepth = portalDepth;
		this.upDown = upDown;
	}
}
// }

let gameDisp = document.getElementsByClassName("game");
let gameContainer = document.getElementById("game-container");
function startGame() {
	if (!gameStarted) {
		gameStarted = true;
		let canvas = createCanvas(500, 500);
		canvas.parent("gameContainer"); // Assuming you have a container with this id in your HTML
		gameDisp.display.block;
		loop(); // Start the game loop
	}
}
