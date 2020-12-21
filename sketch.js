const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEng,myW;
var ground,ball;

function setup() {
  createCanvas(400,400);

  myEng=Engine.create();
  myW=myEng.world;
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200, 390, 200, 20,ground_options);
  World.add(myW,ground);

  var ball_options={
    restituition:1
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(myW,ball);
}

function draw() {
  background(255,255,255);  
Engine.update(myEng);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}
