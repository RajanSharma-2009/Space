var iss, spacecraft, bg, issImage, scImg;

var hasDocked = false;

function preload() {
  issImage = loadImage("iss.png");
  bg = loadImage("spacebg.jpg");
  scImg1 = loadImage("spacecraft1.png");
  scImg2 = loadImage("spacecraft2.png");
  scImg3 = loadImage("spacecraft3.png");
  scImg4 = loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(1200, 600);
  iss = createSprite(330, 130, 40, 60);
  iss.addImage(issImage);
  iss.scale = 0.55;
  spacecraft = createSprite(366, 240, 40, 60);
  spacecraft.addImage(scImg1);
  spacecraft.scale = 0.15;
}
function draw() {
  background(bg);

  if (hasDocked === false) {
    spacecraft.x = spacecraft.x + random(-2, 2);
  }
  if (keyDown("UP_ARROW")) {
    spacecraft.y = spacecraft.y - 2;
  }
  if (keyDown("DOWN_ARROW")) {
    spacecraft.addImage(scImg2);
  }
  if (keyDown("LEFT_ARROW")) {
    spacecraft.x = spacecraft.x - 2;
    spacecraft.addImage(scImg3);
  }

  if (keyDown("RIGHT_ARROW")) {
    spacecraft.x = spacecraft.x + 2;
    spacecraft.addImage(scImg4);
  }

  if (spacecraft.y <= iss.y + 60 && spacecraft.x <= iss.x - 10) {
    hasDocked = true;

    textSize(25);
    fill("white");

    text("Docking Successfull", 200, 300);
  }
  drawSprites();
}
