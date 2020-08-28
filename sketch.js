
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	ball = createSprite(width/10, height-50,20,20);
	ball.shapeColor = color("Purple");

	boxPart1 = createSprite(650, height-45,175,10);
	boxPart1.shapeColor = color("white");

	boxPart2 = createSprite(558, height-65,10,50);
	boxPart2.shapeColor = color("white");

	boxPart3 = createSprite(742, height-65,10,50);
	boxPart3.shapeColor = color("white");

	Engine.run(engine);

	boxPart = Bodies.rectangle(650, height-45,175,10, {isStatic:true} );
 	World.add(world, boxPart);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}	
}