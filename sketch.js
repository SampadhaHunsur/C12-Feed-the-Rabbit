var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("download.png");
  orangeLeaves = loadImage("orange leaves.jpg")
}



function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX

  var select_sprites = Math.round(random(1,2))
  if(frameCount % 80 == 0) {
    if(select_sprites == 1) {
      createApples()
    }
    else{
      createLeaves()
    }
  }

  drawSprites();
}
function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.2;
  apple.velocityY = 3;
  apple.lifetime = 80;
}

function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(orangeLeaves);
  leaves.scale = 0.1;
  leaves.velocityY = 3;
  leaves.lifetime = 80;
} 

