function setup(){
    createCanvas(800,800);
}

function draw(){
background("skyblue")

circlePlane();
drawPyramid();
}


function drawPyramid(){
    pop();
    fill("#FFC300")
    triangle(450, 525, 280, 500, 430, 300);
    push();

    pop();
    fill("grey")
    triangle(450, 525, 550, 500, 430, 300);
    push();
}

function circlePlane(){
    pop();
    noStroke();
    fill("yellow")
    circle(50,600,700)
    push();
    
    pop();
    noStroke();
    fill("yellow")
    circle(500,800,800)
    push();
}