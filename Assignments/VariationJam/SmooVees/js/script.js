/** Jolene Bodika
 * 
 */
"use strict"
/**
 * 
 */

function setup() {
    createCanvas(640, 640);
}

let vee;
let font;
let animSmoothie;


function preload() {
    vee = loadImage('./assets/images/Vee.png')
    animSmoothie = loadImage("./assets/images/animatedSmoothie.png")
    font = loadFont('../js/libraries/BagelFatOne-Regular.ttf');

}

/**
 * 
 */
function draw() {
    background('#b4a7d6');
    image(vee, width / 2, 100)
    drawFloor();


    drawStoreCounter();
    image(animSmoothie, 330, 320, 50, 50)
    drawChairs();
    drawWelcomeMessage()

}


function drawWelcomeMessage() {
    // display shading green for the text
    push()
    fill('#B9FF66')
    textFont(font)
    textSize(60)
    text('Vee\'s \nSmooVees', 70, 100);
    pop()

    // displays the main pink for the text
    push()
    fill('pink')
    textFont(font)
    textSize(60)
    text('Vee\'s \nSmooVees', 75, 100);
    pop()
    
}

function drawFloor() {
    push();
    noStroke();
    fill('#c9c3bd');
    rect(0, height - 100, width, 500);
    pop();

    //WHITE floor BORDER 
    push();
    noStroke()
    fill('#fffff2');
    rect(0, height - 100, width, 20);
    pop();

}





function drawChairs() {


    for (let i = 0; i < 500; i += 200) {
        // base of the chair ring
        push();
        strokeWeight(0.1)
        //noStroke()
        fill("#636363")

        ellipse(100 + i, 595, 60, 20);
        pop();
        // base of the chair
        push();
        // noStroke()
        strokeWeight(0.1)
        fill('#c0c0c0')
        rect(87 + i, 460, 25, 130);
        pop();

        // seat of the chair
        push();
        fill('#c0c0c0')
        strokeWeight(0.1)

        ellipse(100 + i, 450, 80, 30);
        pop();
    }


}
// Counter of the store 
function drawStoreCounter() {

    // Drawcounter colour
    push()
    noStroke()
    fill('#b4a7d6')
    rect(0, 420, width, 130)
    pop()


    //WHITE COUNTER 
    push();
    noStroke();
    fill('#fff');
    rect(0, height - 300, width, 50);
    pop();

    //WHITE BORDER 
    push();
    noStroke();
    fill('#D4D4D4');
    rect(0, height - 250, width, 20);
    pop();

    //Shade on green 
    push();
    noStroke();
    fill('#8e7cc3');
    rect(0, height - 230, width, 10);
    pop();

}



