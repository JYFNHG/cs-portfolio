/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

//conditional
drawConditional = function() {
        drawBear();
};    

//loops
background(35, 107, 34);
    for(var i=0; i<width; i+=10){
        for(var j=0; j<height; j+=20){
            fill(53, 150, 52),(80, 130, 229);
            stroke(53, 150, 52)
        ellipse(i,j,20,10);
        }
    ellipse(i,200,20,);
    }
function drawLoop() {
    
   
    
} 

//function
function drawBear(x,y) {
    if(mouseX>200){
            fill(178, 139, 94)
        }
        else{
            fill(43, 38, 33)
        }
    stroke(2,2,2);
    strokeWeight(2)
    // fill(random(255),random(255),random(255));
    //left ear
    ellipse(x-35,y-30,200-160,200-160);
    //head
    ellipse(x,y,200-110,200-120);
    //right ear
    ellipse(x+40,y-30,200-160,200-160);
    //left eye
    ellipse(x-30,y-5,200-192,200-192);
    //right eye
    ellipse(x,y-5,200-192,200-192);
    //nose
    ellipse(x-20,y+10,200-187,200-190);
    //mouth
    line(x-4,y+20,x-30,y+20);
}

mouseClicked = function(){
    drawBear(mouseX,mouseY);
}    


var xPos=0;
var yPos=0;
var weight=15;
//circle
function drawCircle() {
    strokeWeight(weight);
    stroke(10, 86, 10);
    fill(10, 86, 10);
    ellipse(xPos,yPos,30,30);
    xPos=xPos+20;

    strokeWeight(weight);
    stroke(10, 86, 10);
    fill(10, 86, 10);
    ellipse(xPos,yPos,30,30);
    xPos=xPos+10;
    yPos=yPos+10;
    
    strokeWeight(weight);
    stroke(10, 86, 10);
    fill(10, 86, 10);
    ellipse(xPos,yPos,30,30);
    xPos=xPos+15;
    yPos=yPos+5;
    
    strokeWeight(weight);
    stroke(10, 86, 10);
    fill(10, 86, 10);
    ellipse(xPos,yPos,30,30);
    xPos=xPos+70;
    yPos=yPos+10;
}
draw = function(){
    drawCircle();    
};



// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);