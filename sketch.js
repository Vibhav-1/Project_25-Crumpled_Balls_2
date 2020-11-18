
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  this.image2 = loadImage("dustbingreen.png"); 
	//Create the Bodies Here.
	  ground1 = new ground (400, 650, 800, 30);
    paper1 = new Paper (200, 500, 70);
    dustbinL = new dustbin(560, 541, 10, 170);
    dustbinR = new dustbin(740, 541, 10, 170);
    dustbinD = new dustbin(650, 629, 190, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground1.display();
  paper1.display();
  dustbinL.display();
  dustbinR.display();
  dustbinD.display();
  imageMode(CENTER);
  image(this.image2, 650, 541, 210, 200);
  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.postion,{x:85, y:-450})
  }
  
}


