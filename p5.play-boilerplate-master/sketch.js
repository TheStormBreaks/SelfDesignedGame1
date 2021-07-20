var bg_img, bg;
var topCliff, bottomCliff, topCliff_img, bottomCliff_img;
var spaceship, spaceship_img;
var welcomebg, welcomebg_img

var PLAY = 1;
var END = 0;
var STORY, WELCOME
var gameState = PLAY;

var gameState = WELCOME;
//variables

function preload() {
  bg_img = loadImage("pictures/bg.png");
  spaceship_img = loadImage("pictures/spaceship 2.png");
  bottomCliff_img = loadImage("pictures/Down cliff.png");
  topCliff_img = loadImage("pictures/Top cliff.png");
  welcomebg_img = loadImage("pictures/Welcome page.jpg")
  

}



function setup() {
  createCanvas(displayWidth-10, displayHeight-20);
  //createSprite(400, 200, 50, 50);

  bg = createSprite(700, 300, displayWidth, displayHeight);
  bg.addImage(bg_img);
   //create background sprite and add image

  welcomebg = createSprite(700, 300, displayWidth, displayHeight);
  welcomebg.addImage(welcomebg_img);
  welcomebg.scale = 0.4;
  welcomebg.visible = false;


  topCliff = createSprite(800, 400, displayWidth, displayHeight);
  topCliff.addImage(topCliff_img);
  topCliff.scale = 0.85;
  //creates the top cliff
  //adds the image for the top cliff
  //scales the top cliff to reduce size
   

  bottomCliff = createSprite(800, 400, displayWidth, displayHeight);
  bottomCliff.addImage(bottomCliff_img);
  bottomCliff.scale = 0.85;
  //creates the bottom cliff
  //adds the image for the bottom cliff
  //scales the bottom cliff to reduce size
  
  spaceship = createSprite(50, 200, 20, 20);
  spaceship.addImage(spaceship_img);
  //create spaceship sprite and add image. 


  

}



function draw() {
  background(255,255,255);  
  drawSprites();

  
  

  //console.log(mouseX, mouseY);
  console.log("MOVE THE MOUSE SO THAT X>1200")
  //to check the co ordinates of the mouse

  

 

  if(gameState === WELCOME){
    topCliff.visible = false;
    bottomCliff.visible = false;
    spaceship.visible = false;
    welcomebg.visible = true;
    //text("move the mouse so that x>1200., 200, 200")
    
  }

  //checking if the game state play works or not
  if (mouseX>1200){
    gameState = PLAY
  }

  if (gameState === PLAY){
    topCliff.visible = true;
    bottomCliff.visible = true;
    spaceship.visible = true;
    welcomebg.visible = false;
    topCliff.velocityX = -10
    bottomCliff.velocityX = -10
    spaceship.y = mouseY;
  }
  //iff game state is play, the cliffs move
  //and then only th spaceship moves


  if (bottomCliff.x < 0) {
    bottomCliff.x = bottomCliff.width/2;
  }
  //resets the position of the bottom cliff
  //to make it seem like an infinite loop

  if (topCliff.x < 0) {
    topCliff.x = topCliff.width/2;
  }
  //resets the position of the top cliff
  //to make it seem like an infinite loop.

  
}