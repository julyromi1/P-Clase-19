var roadImg;
var carroImg;
var gameoverImg;
var guasonImg;
var harleyquinnImg;
var InsigniaImg;
var KaboomImg;
var WinnerImg;
var ZaapImg;
var roadImg;
var road;
var carro;
var guason;
var harleyquinn;
var insignia;
var kaboom;
var JUGANDO = 1;
var FIN = 0;
var estadodejuego= JUGANDO;

function preload(){
carroImg = loadImage ("carrobatman.png");
gameoverImg = loadImage ("gameover.png");
guasonImg = loadImage ("guason.png");
harleyquinnImg = loadImage ("harleyquinn.png");
InsigniaImg = loadImage ("insignia.png");
KaboomImg = loadImage ("kaboom.png");
WinnerImg = loadImage ("winner.png");
ZaapImg = loadImage ("zaap.png");
roadImg = loadImage ("Road.png");
}

function setup()
 {
    createCanvas(1200,300);

road=createSprite(100,150);
road.addImage(roadImg);

carro=createSprite(100,150);
carro.addImage(carroImg);
carro.scale= 0.1;



guasongroup = new Group ();
harleyquinngroup = new Group ();
insigniagroup = new Group ();


carro.setCollider ("rectangle",0,0,carro.width,carro.height);
carro.debug=true;

 }

function draw() {
background ("black");
drawSprites ();

/*if (Score%100==0){
estadodejuego=FIN;
}*/

if (estadodejuego == JUGANDO) { 
  carro.y = World.mouseY;
  road.velocityX=-(5); //+ Score/100

if(road.x < 0){
  road.x = width/2;
}

if (World.frameCount % 100== 0){
  holaguason ();
}
if (World.frameCount % 1500 == 0){
  holaharleyquinn ();
}
if (World.frameCount % 80 ==0) {
  holainsignia ();
}

if (guasongroup.isTouching (carro))
  {
  estadodejuego=FIN;
  }

if (harleyquinngroup.isTouching (carro))
  {
  estadodejuego=FIN;
  }

  if (insigniagroup.isTouching (carro)) {
  hi (); }
}
  else if (estadodejuego==FIN){
  text("You lose", 300, 100,100,100);
  scale= 10;
  road.x=0;
  road.velocityX=0;
  guasongroup.setVelocityXEach(0);
  harleyquinngroup.setVelocityXEach (0);
  insigniagroup.setVelocityXEach(0);
  guasongroup.setLifetimeEach (-1);
  harleyquinngroup.setLifetimeEach (-1);
  insigniagroup.setLifetimeEach (-1);
  /*kaboom=createSprite(600,150);
  kaboom.addAnimation("stop", KaboomImg);
  kaboom.scale=.5;
  carro.y =150;
  */
  }
}

function hi (){
  text("YOU WIN", 300, 100,100,100);
  scale= 10;
  road.x=0;
  road.velocityX=0;
  guasongroup.setVelocityXEach(0);
  harleyquinngroup.setVelocityXEach (0);
  insigniagroup.setVelocityXEach(0);
  guasongroup.setLifetimeEach (-1);
  harleyquinngroup.setLifetimeEach (-1);
  insigniagroup.setLifetimeEach (-1);
}





function holaguason (){
  var guason= createSprite (990,Math.round(random(20,200)),1,2);  
  guason.addImage (guasonImg);
  guason.velocityX=-3;
  guason.lifetime=350;
  guason.scale=0.1;
  guasongroup.add (guason);
  if (guason.isTouching (carro)){  //group
  guason.velocityX+=-4;  
  }
}

function holaharleyquinn (){
  var harleyquinn= createSprite (890,Math.round(random(20,200)),1,2);
  harleyquinn.addImage(harleyquinnImg);
  harleyquinn.velocityX= -4;
  harleyquinn.lifetime=300;
  harleyquinn.scale=0.1;
  harleyquinngroup.add (harleyquinn);
  harleyquinn.velocityX+=-3;
  
}

function holainsignia (){
  var insignia= createSprite (990,Math.round(random(20,200)),1,2);
  insignia.addImage (InsigniaImg);
  insignia.velocityX= -6;
  insignia.lifetime=500;
  insignia.scale=0.04;
  insigniagroup.add (insignia);
  insignia.velocityX+=-3;

}
