const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  

  box1 = new Box(200,300,50,50);
  box2 = new Box(200, 100, 50, 100);
  ground = new Ground(200, 380, 400, 20);
  console.log(ground); 
}

function draw() {
  background("skyblue"); 
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
  
  drawSprites();
}