/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var mouseX;0
var mouseY;0

draw = function() {
    fill(0,0,0)
        ellipse(mouseX,mouseY,30,30);
            if(mouseX>200){
                fill(175, 234, 175)
                strokeWeight(3)
                stroke(57,0,214)
            }
            else{
               fill((166, 220, 221))
               strokeWeight(3)
               stroke(57,20,14)
            }
                ellipse(0,0,0,0)
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
