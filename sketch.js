var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);

speed = random(223,321);
weight = random(30,52);
bullet = createSprite(50,200,50,20);
bullet.velocityX = speed;
thickness = random(22,83);
wall = createSprite(1500,200,thickness,height/2);
bullet.bounceOff(wall);
bullet.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  if(wall.x-bullet.x <(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)
    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<5){
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}