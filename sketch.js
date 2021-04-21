const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,iron,rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(500,20,40);
    iron = new Iron(350,20);
    rubber = new Rubber(700,20,60);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
}