/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
drawBear = function(x,y) {
    fill(random(255),random(255),random(255));
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
    ellipse(x-20,y+10,200-187,200-190)
    //mouth
    line(x-4,y+20,x-30,y+20)
};    

mouseClicked=function(){
    drawBear(mouseX,mouseY);
}
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
