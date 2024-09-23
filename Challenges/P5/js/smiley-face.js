function setup(){
  createCanvas(800,800)  
}

function draw(){
background("yellow")

pop();
noFill();
strokeWeight(20);
circle(400,400, 600);
push();

pop();
fill("black")
ellipse(275,300,60,120)
ellipse(500,300,60,120)
push();

pop()
noFill()
arc(400, 550, 180, 90, 0, PI + QUARTER_PI, OPEN);
push()

}