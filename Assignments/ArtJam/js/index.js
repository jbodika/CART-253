function setup() {
    createCanvas(800, 800);
  }
  
  //displays the canvas
  function draw() {
    background("#268b07");

    drawMushroom();
   
  }
  
function drawMushroom(){
//mushroom base
push();
fill("#ffeddf");
ellipse(400,750,200,700);
pop();

//mushroom shadow
push();
noStroke();
fill("#818589");
ellipse(400,525,165,100);
pop();


//mushroom top
push();
fill("#9a1616");
ellipse(400,400,400,300);
pop();

//mushroom dots
push();
fill("#fff8f3");
ellipse(500,400,65,25);
ellipse(450,320,55,40);
ellipse(300,300,58,30);
ellipse(300,475,55,35);
ellipse(210,400,30,42);
ellipse(345,400,35,23);
ellipse(580,375,35,43);
ellipse(510,490,60,41);
ellipse(420,520,30,20);
ellipse(460,450,30,20);
pop();

}


function changeBackground(){
    background("blue");
}

function drawGrasshopper(){}

function drawBird(){}

function drawSnake(){}

function drawOwl(){}




