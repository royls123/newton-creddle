
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine,world
var ground,roof,bob1,bob2,bob3,bob4,bob5
var ch1,ch2,ch3,ch4,ch5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Box (400,680,800,20)
	roof=new Box (400,100,300,20)
bob1=new Bob (280,350,30)
bob2=new Bob(340,350,30)
bob3=new Bob(400,350,30)
bob4=new Bob(460,350,30)
bob5=new Bob(520,350,30)

ch1=new Rope(bob1.body,roof.body,-120)
ch2=new Rope(bob2.body,roof.body,-60)
ch3=new Rope(bob3.body,roof.body,0)
ch4=new Rope(bob4.body,roof.body,+60)
ch5=new Rope(bob5.body,roof.body,+120)



Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  roof.display()
 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()
 
 ch1.display()
 ch2.display()
 ch3.display()
 ch4.display()
 ch5.display()

}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:+50,y:+50})
	}
}


