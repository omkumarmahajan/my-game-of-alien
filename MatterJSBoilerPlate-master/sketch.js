
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0
var PLAY = 0
var score =0
var text1 =0
var text2 = 0

function preload()
{
knifeImg = loadImage("bullet img.png")	
jetImg = loadImage("my game .png")
alieani = loadImage("alien img.png")
}

function setup() {
	createCanvas(800,800);

wall1 = createSprite(800,800,10,60)
wall1.visible = false
wall2 = createSprite(0,800,10,60)
wall2.visible = false

	engine = Engine.create();
	world = Engine.world;

	//Create the Bodies Here.
	jet = createSprite(500,750,20,20)
  jet.addImage(jetImg) 
  jet.scale = 0.3 

alienobs = new Group() 
jetbullet = new Group()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  text("SCORE :"+score,50,50)
  text1= text(" PRESS RIGHT ARROW TO MOVE RIGHT AND PRESS LEFT ARREW TO MOVE LEFT",150,150)
  text2 = text("PRESS SPACE TO SHOOT THE BULLET",250,250) 

 


  if(gameState === PLAY){

   

    shootbullet() 
    alien()

    if(keyDown("RIGHT_ARROW"))
  {
	  jet.x = jet.x+ 10
  }
   
  if(keyDown("LEFT_ARROW"))
  {
    jet.x = jet.x-10
  }

  if(score=> 200 )
  {
    alien.velocityX =-12
  }
   
}


if(alienobs.isTouching(jetbullet))
{
  jetbullet.destroyEach()
  alienobs.destroyEach()
  score = score+10
}
  
jet.bounceOff(wall1)
jet.bounceOff(wall2)
  drawSprites();
 
}


function shootbullet() 
{
  if(keyDown("space"))
  {
    bullet=createSprite(jet.x,jet.y,20,20)
    bullet.addImage(knifeImg)
    bullet.scale = 0.1

    bullet.velocityY = -30
    jetbullet.add(bullet)   
      
  }
}

function alien()
{
  if(frameCount % 90 === 0)
   {
     var alien = createSprite(800,250,40,40)
     alien.y = random(120,290)
     alien.addImage(alieani)
     alien.scale = 0.9
     alien.velocityX = -8

     alien.lifetime = 300;
     alienobs.add(alien)

   }
}

