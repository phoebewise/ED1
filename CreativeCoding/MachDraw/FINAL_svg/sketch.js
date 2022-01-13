/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

function setup() {
  createCanvas(200, 200, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {
  for (var y= 0; y< 600; y= y+random(40,60)){
    for (var x= 0; x< 600; x= x+random(50,100)){
        //ellipse(x,y,random(2,90), random(20,40);line (x,y, random(10,20)+x ,random(70,90)+y);
          line (x, y);
    }
  }
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}
