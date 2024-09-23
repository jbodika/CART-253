function setup(){
  createCanvas(800,800);
 
}

function draw(){
    background("skyblue");

    //White Section
    pop();
    noStroke();
    rect(100,100,200,500);
    fill("#FFF")
    push();

    //Green Section
    pop();
    noStroke();
    rect(300,100,200,500);
    fill("#CD212A");
    push();

    //Red Section
    pop();
    noStroke();
    rect(500,100,200,500);
    fill("#008C45");
    push();

}