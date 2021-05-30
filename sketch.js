var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairybody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg=loadImage("images/fairyImage1.png","images/fairyImage2.png");
	

}

function setup() {
	createCanvas(800, 650);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	fairy=createSprite(100,500,50,50);
	fairy.addAnimation("move",fairyImg);
	fairy.scale=0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;


	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	//var objectoptions={
    //isStatic:true
 // }
	//fairy=Bodies.rectangle(100,600,26,35,objectoptions);
	//World.add(world,fairy);
	//fairy.addImage(fairyImg);

	fairybody=Bodies.circle(100,500,5,{restitution:0.5, isStatic:true});
	World.add(world,fairybody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
 // keyPressed();

  //rectMode(CENTER);
  //rect(fairy.position.x,fairy.position.y,100,35);



  fairy.x=fairybody.position.x;
 fairy.y=fairybody.position.y;

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode=== RIGHT_ARROW){
		//fairy.VelocityY=0;
		fairy.velocityX=2;
	}
	if(keyCode===LEFT_ARROW){
		//fairy.VelocityY=0;
		fairy.velocityX=-2;
	}

}
