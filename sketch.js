const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var radius=40;
function setup() {
  createCanvas(1600,1700);
  engine = Engine.create();
  world = engine.world;
  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  ball=Bodies.circle(260,100,radius/2,ball_options);
  World.add(world,ball);
  ground =new Ground(width/2,670,width,20);
  right = new Ground(1350,600,20,120);
  left = new Ground(1100,600,20,120);
  //top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,radius,radius)
  ground.show();
  //top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
  }
}
