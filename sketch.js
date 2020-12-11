var rope1 ,rope2,rope3,rope4,rope5,hand,bob1,bob2,bob3,bob4,bob5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint
var  bobDiameter = 60
function preload()
{
	
}

function setup() {
	createCanvas(3000, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 =new bob(400,400,60)
	bob2 = new bob (400,400,60)
	bob3 = new bob(400,400,60)
	bob4 = new bob (400,400,60)
	bob5 =new bob(400,400,60)

	hand = new hand1(500,100, 1000,40);
	hand2 = new hand1(440,100, 1000,40)
	hand3 = new hand1(380,100, 1000,40)
	hand4 = new hand1(320,100, 1000,40)
	hand5 = new hand1(260,100, 1000,40)
	rope1 = new rope(bob1.body,hand.body,-bobDiameter*2*2,0)
	rope2 = new rope (bob2.body,hand.body,-bobDiameter*2,0)
	rope3 =new rope(bob3.body,hand.body,bobDiameter,0)
	rope4 = new rope (bob4.body,hand.body,bobDiameter*2,0)
	rope5 = new rope (bob5.body,hand.body,-bobDiameter*2*2,0)
	
	 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);



  


  background("blue");
  rope1.display();
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  hand.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  drawSprites();
 
}




function mouseDragged(){
    Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    bob5.fly();
}




function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    bob1.fly();
}





function mouseDragged(){
    Matter.Body.setPosition(bob4.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    bob4.fly();
}