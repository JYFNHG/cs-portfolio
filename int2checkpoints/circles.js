/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°

var xPos=0;
var yPos=0;
var weight=2;
//draws green and red circles from upper left to mid lower right
draw = function() {
    strokeWeight(weight);
    stroke(255,255,255);
    fill(255,255,255)
    ellipse(xPos,yPos,30,30);
    xPos=xPos+60
    yPos=yPos+10
    
    strokeWeight(weight);
    stroke(255,255,255);
    fill(255,255,255)
    ellipse(xPos,yPos,30,30);
    xPos=xPos+10
    yPos=yPos+10
    
    strokeWeight(weight);
    stroke(255,255,255);
    fill(255,255,255)
    ellipse(xPos,yPos,30,30);
    xPos=xPos+15
    yPos=yPos+5
    
    strokeWeight(weight);
    stroke(255,255,255);
    fill(255,255,255)
    ellipse(xPos,yPos,30,30);
    xPos=xPos+10
    yPos=yPos+10
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
