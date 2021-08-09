
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

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 20, {isStatic:true});
	World.add(world, ground)

    paperBall = Bodies.circle(100, 640, 70);
	World.add(world, paperBall)
	paperBall.image = loadImage("https://s3-projectsassets.whjr.online/paper.png")
	var paperBall_options={
		isStatic:false
		restitution=0.3
		friction=0.5
		density=1.2

	}

	)

	trashcanPartOne = Bodies.rectangle(600, 600, 20, 100, {isStatic:true});
	World.add(world, trashcanPartOne);

	trashcanPartTwo = Bodies.rectangle(650, 640, 100, 20, {isStatic:true});
	trashcanPartTwo.image = loadImage("https://s3-projectsassets.whjr.online/dustbingreen.png")
	World.add(world, trashcanPartTwo);

	trashcanPartThree = Bodies.rectangle(700, 680, 20, 100 {isStatic:true});
	World.add(world, trashcanPartThree);

	var launcher=new(slingshot,paperBall,{x:100, y:540})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keycode === UP_ARROW){
     paperBall.body.applyForce(paperBall.body, paperBall.body.position,{x:85, y:-85})
  }
  trashcanPartTwo.display()
  drawSprites();
 
}



