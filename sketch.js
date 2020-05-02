var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(2600,800);

  car =createSprite(50,200,50,50);
car.shapeColor="white";
wall=createSprite(1300,290,50,height/2);
wall.shapeColor="blue";
speed=random(55,90);
weight=random(400,1500);
}

function draw() {
  background(0);  
  deformation=0.5*weight*speed*speed/22500


    car.velocityX=speed;  
   if(car.isTouching(wall)&&deformation<100){
     car.shapeColor="green"
   }
   if(car.isTouching(wall)&&deformation<180 && deformation>100){
    car.shapeColor="yellow"
  }
   if(car.isTouching(wall)&&deformation>180){
    car.shapeColor="red"
  }

    car.collide(wall);  
    drawSprites();

}