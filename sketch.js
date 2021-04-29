
var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  score = 0;
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if(World.frameCount % 80 == 0){
    if (select_balloon ==1)
    redballoon();} 
    
      if(World.frameCount % 60 == 0){
    
     if (select_balloon == 2){
    blueballoon();}}
   
        if(World.frameCount % 80 == 0)
    if (select_balloon == 3){
      greenballoon();}
    
     if(World.frameCount % 50 == 0)
    if (select_balloon == 4){
      pinkballoon();}
  
  textSize= 20;
  score = 0 ;
  text("Score :" + score ,370,50);
    
      
  drawSprites();
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}

   function redballoon(){
     var r = createSprite(0,Math.round(random(20,370)),10,10);
     r.velocityX= 3;
     r.lifetime= 150;
     r.scale=0.1;
     r.addImage(red_balloonImage);
   }

 function blueballoon(){
     var b  = createSprite(0,Math.round(random(20,370)),10,10);
     b.velocityX= 3;
     b.lifetime= 150;
     b.scale=0.1;
     b.addImage(blue_balloonImage);
 }

 function greenballoon(){
     var g = createSprite(0,Math.round(random(20,370)),10,10);
     g.velocityX= 3;
     g.lifetime= 150;
     g.scale=0.1;
     g.addImage(green_balloonImage);
 }

 function pinkballoon(){
     var c  = createSprite(0,Math.round(random(20,370)),10,10);
    c.velocityX= 3;
     c.lifetime= 150;
     c.scale=0.1;
     c.addImage(blue_balloonImage);
 }