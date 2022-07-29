var car1, car2, car3;
var cone;
var dogImg, dog;
var food, water;
var road;
var track;

function preload() {
  car1 = loadImage("car1.png");
  car2 = loadImage("car2.png");
  car3 = loadImage("car3.png");
  cone = loadImage("cone.png");
  dogImg = loadAnimation("dog1.png","dog2.png","dog3.png");
  road = loadImage("road.jpeg");
  food = loadImage("food_bowl.png");
  water = loadImage("water_bowl.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  track = createSprite(width/2,height/2-500);
  track.addImage(road);
  track.scale = 4.8;

  dog = createSprite(width/2-400,height-350);
  dog.addAnimation("woof",dogImg)
}

function draw() {
  background("pink");
  track.velocityX = -7;
  if (track.x < 0) {
    track.x = width/2
  }
  drawSprites();
}