const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var slingshot;
var polygon,polygonImg;

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup() {
    createCanvas(900,400);

    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

    ground = new Ground();

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
   
    
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);
  
    b1 = new Block(640,175,30,40);
    b2 = new Block(670,175,30,40);
    b3 = new Block(700,175,30,40);
    b4 = new Block(730,175,30,40);
    b5 = new Block(760,175,30,40);
    b6 = new Block(670,135,30,40);
    b7 = new Block(700,135,30,40);
    b8 = new Block(730,135,30,40);
    b9 = new Block(700,95,30,40);

    polygon = new Polygon(150,100,20,35);
    

    slingshot =new Slingshot(polygon.body,{x:130,y:110});
}

function draw() {
    background("darkbrown");
   
    textSize(22);
    fill("white");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",110,30);
  
    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(3);
    stroke(10);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();
    fill("skyblue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    fill("turquoise");
    b6.display();
    b7.display();
    b8.display();
    fill("pink")
    b9.display();

    polygon.display();

    imageMode(CENTER);
    image(polygonImg,polygon.body.position.x,polygon.body.position.y,50,50);

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
      slingshot.attach(polygon.body);
    }
}
