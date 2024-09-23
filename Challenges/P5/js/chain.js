function setup(){
    createCanvas(800,800);
    
}

function draw(){
    background("yellow")

    pop();
    strokeWeight(45)
    noFill();
     ellipse(400,15,200, 400)
    for(let i =0;i<1000;i+=275){
        ellipse(400,15+i,200, 400)
    }
    push();
}