var Monkey, img
var ground
var bananaimg
var rockimage, backgroundImage;
var score=0

function preload() {
  img = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")

  bananaimg = loadImage("banana.png")
  rockimage = loadImage("stone.png")
  backgroundImage = loadImage("jungle.jpg")

}

function setup() {
  createCanvas(400, 400);
  backgroundSprite = createSprite(200, 200);
  backgroundSprite.addImage(backgroundImage)

  ground = createSprite(100, 380, 600, 10)
  ground.velocityX = -2
  ground.x = ground.width / 2;
  ground.visible = false;
  Monkey = createSprite(50, 180, 20, 50)
  Monkey.addAnimation("running", img)
  Monkey.scale = 0.09


}

function draw() {
  background(255)
  
  fill("white")

  if (keyDown("space")) {
    Monkey.velocityY = -10;
  }

  Monkey.velocityY = Monkey.velocityY + 0.8
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  Monkey.collide(ground);
  

  spawnsbanana();
  spawnsrock();
  drawSprites();
  text("Score" + score, 300, 100)
}

function spawnsbanana() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(400, 300, 40, 10);
    banana.addImage(bananaimg)
    banana.scale = 0.05;
    banana.velocityX = -5
    banana.lifetime = 200;
if(Monkey.isTouching(banana)) {
score=score+1;
}


  }

}

function spawnsrock() {
  if (frameCount % 60 === 0) {
    var rock = createSprite(400, 355, 10, 40);
    rock.velocityX = -6;
    rock.addImage(rockimage)
    rock.scale = 0.09;
    rock.lifetime = 100;
  }
}