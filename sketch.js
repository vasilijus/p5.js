
function setup() {
   createCanvas(640,480);
   angleMode(DEGREES);

}

function draw() {
   background(0);
   translate(200,200);
   rotate(-90);

   let hr = hour();
   let min = minute();
   let sec = second();

   fill(255);
   noStroke();
   text( hr +" : "+ " : "+ min +" : "+ sec, 20,20);

   //strokeWeight(8);
   //stroke(255);
   //noFill();
   //ellipse(200,200,300,300);

   strokeWeight(6); 
   stroke(255,100,150);
   noFill();
   let end1 = map(sec, 0, 59, 0, 360);
   arc(0,0,300,300, 0, end1);

   stroke(220, 120, 120);
   let end2 = map(min, 0, 59, 0, 360);
   arc(0,0,280,280, 0, end2);

   stroke(140, 140, 140);
   let end3 = map(hr % 12, 0, 12, 0,360);
   arc(0,0,260,260, 0, end2);

}
/*
function draw() {
   if(mouseIsPressed) {
      fill(0);
   } else {
      fill(255);
   }
   ellipse(mouseX, mouseY, 40,40);
}
*/