function preload(){
    car_img=loadImage(car.png);
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    car=createSprite(50,60,200,200);
    car.addImage("img", car_img);
}
function draw(){
    background("lightblue");
    drawSprites();
}