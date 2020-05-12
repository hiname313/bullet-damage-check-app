var wall,thickness,bullet,speed,weight;
function setup() {
  createCanvas(800,400);
  
  thickness = random(22,83);
  wall = createSprite(750,200,thickness, 200);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(400,100)
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;
    var Damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if(Damage>10){
      wall.shapeColor = "red";
    }
    if(Damage<10){
      wall.shapeColor = "green";
    }
  }
 
  drawSprites();
}

