var canvas;
var music;
var surface1
var surface2
var surface3
var surface4
var box



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
canvas = createCanvas(800,600);


    //create 4 different surfaces
surface1=createSprite(50,575,120,20)
surface1.shapeColor="blue"

surface2=createSprite(200,575,120,20)
surface2.shapeColor="orange"

surface3=createSprite(350,575,120,20)
surface3.shapeColor="maroon"

surface4=createSprite(500,575,120,20)
surface4.shapeColor="green"

    //create box sprite and give velocity
box=createSprite(50,350,30,30)
box.velocityY=2;

createEdgeSprites();





}


 


function draw() {
    background("black");
    
    
    if (surface1.isTouching (box) && box.bounceOff(surface1)){
        box.velocityY=0
        box.shapeColor="blue"
        
    }

    if (surface2.isTouching (box) && box.bounceOff(surface2)){
        box.velocityY=0
        box.shapeColor="yellow"

        
    }

    if (surface3.isTouching (box) && box.bounceOff(surface3)){
        box.velocityY=0
        box.shapeColor="maroon"
        
    }

    if (surface4.isTouching (box) && box.bounceOff(surface4)){
        box.velocityY=0
        box.shapeColor="green"
        
    }
    

    
    drawSprites()
}
