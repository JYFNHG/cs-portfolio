/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
background(255, 255, 255);
    for(var i=0; i<width; i+=10){
        for(var j=0; j<height; j+=20){
                var size=random(20);
                fill(random(255),random(255));
            ellipse(i,j,random(20),random(20));
        }
        ellipse(i,200,20,);
    }
draw = function() {
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);