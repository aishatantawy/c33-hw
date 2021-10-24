const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow;

var engine, world;
var drops = [];
var rand;
var maxDrops=50;
var snowCreatedFrame=0;
var bgImg;

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(600,600);

    bgImg = loadImage("snow2.jpg");
    

    //creating drops
    if(frameCount % 5000 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new snowflake(random(0,600), random(0,600)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(bgImg); 

    //creating thunder
    
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }

    drawSprites();
    
}