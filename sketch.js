var bullet,wall;
var speed,weight,b1,b2,b3;
var thickness;

function setup(){
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,20,20);
  wall=createSprite(1300,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);
 
 b1=createSprite(50,100,2470,3);
 b1.shapeColor=color(211,211,211)
b2=createSprite(50,200,2450,3);
b2.shapeColor=color(211,211,211)
b3=createSprite(50,300,2470,3)
b3.shapeColor=color(211,211,211)
  bullet.velocityX=speed;
}

function draw(){
  createCanvas(1600,400);

  background(0)

   
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation>10){
      wall.shapeColor=color(255,0,0)
    }
  
  if(deformation<10){
    wall.shapeColor=color(0,255,0)
  }
  }
  drawSprites();
}

function hasCollided(){
 var  bulletRightEdge=(bullet.x+bullet.width)
  var wallLeftEdge=wall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}