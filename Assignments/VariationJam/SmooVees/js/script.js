/*
* Vee's SmooVees 
* Jolene Bodika
*
* Controls:
* 
* Uses:
* p5.js library
* https://p5js.org
* GoogleFonts API
*https://developers.google.com/fonts
*

 */
"use strict"

function setup() {
    createCanvas(800, 800);
}

let vee;
let font;
let strawberrySmoothie;
let orangeSmoothie;
let cherrySmoothie;
let limeSmoothie;
let blender;

// created an object that holds the default values used when displaying an image to avoid repetition in code 
let defaultImg = {
    size: {
        x: 50,
        y: 50
    },
    y: 400

}


function preload() {
    vee = loadImage('./assets/images/Vee.png')
    strawberrySmoothie = loadImage("./assets/images/strawberrySmoothie.png")
    font = loadFont('../js/libraries/BagelFatOne-Regular.ttf');
    blender = loadImage("./assets/images/blender.png")
    cherrySmoothie = loadImage("./assets/images/cherrySmoothie.png")
    limeSmoothie = loadImage("./assets/images/limeSmoothie.png")
    orangeSmoothie = loadImage("./assets/images/orangeSmoothie.png")

}

/**
 * 
 */
function draw() {
    background('#b4a7d6');
    drawWindow()
    drawReflectiveGlass()
    drawBackgroundCounter()
    image(vee, width / 2, 150)
    drawFloor();


    drawStoreCounter();
    drawDecorations();

    drawChairs();
    drawCabinets()
    drawWelcomeMessage()


}


function drawDecorations() {
    image(strawberrySmoothie, 520, defaultImg.y, defaultImg.size.x, defaultImg.size.y)
    image(cherrySmoothie, 720, defaultImg.y, defaultImg.size.x, defaultImg.size.y)
    image(limeSmoothie, 130, defaultImg.y, defaultImg.size.x, defaultImg.size.y)
    image(orangeSmoothie, 330, defaultImg.y, defaultImg.size.x, defaultImg.size.y)
    image(blender, 700, 285, 40, 70)

}

function drawWelcomeMessage() {
    //  Create the up-down movement for the hearts with the sin() function
    let speed = 0.05
    let yOffset = sin(frameCount * speed) * 5; // Adjust the amplitude by 5

    // display shading green for the text
    push()
    fill('#a64d79')

    textFont(font)
    textSize(80)
    text('Vee\'s \nSmooVees', 50, 205 + yOffset);
    pop()

    // displays the main pink for the text
    push()

    fill('#c27ba0')
    textFont(font)
    textSize(80)
    text('Vee\'s \nSmooVees', 55, 200 + yOffset);
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
    fill('#fff');
    rect(0, height - 100, width, 20);
    pop();

}

/**
 * Draws the refelctive glass effect on the window
 */
function drawReflectiveGlass() {

    push();
    //bottom half of the effect
    noStroke();
    fill(219, 225, 227, 127);
    rect(50, 170, 700, 140);

    // top half of the effect
    fill(167, 199, 203, 127);
    triangle(50, 170, 50, 310, 750, 170);
    pop();

}

/**
 * Draws background window
 */
function drawWindow() {
    push()
    strokeWeight(10)
    stroke('white')
    fill('#CAE9F5')
    rect(50, 170, 700, 140)
    pop()




}
/**
 * Draws the counter that shows up behind Vee
 */
function drawBackgroundCounter() {
    push();
    noStroke();
    fill('#fffff2');
    rect(0, 340, width, 50);
    pop();

    push();
    noStroke();
    fill('#D4D4D4');
    rect(0, 380, width, 30);
    pop();

}

function drawCabinets() {
    push()
    fill('#fffff2')
    noStroke()
    rect(0, 0, width, 115)
    pop()
    // draws the cabinets at the top to fill up space
    for (let i = 300; i < 600; i += 120) {
        // draws the square cabinet
        push()
        noStroke()
        fill('#ECECEC')
        rect(i, 10, 90, 90)
        pop()
        // draws the handle to the cabinet
        push()
        noStroke()
        fill('#D4D4D4')
        ellipse(80 + i, 60, 10)
        pop()
    }
}



function drawChairs() {


    for (let i = 0; i < 800; i += 200) {
        // base of the chair ring
        push();
        strokeWeight(0.1)

        fill("#D4D4D4")

        ellipse(100 + i, 740, 60, 20);
        pop();
        // base of the chair
        push();
        strokeWeight(0.1)
        fill('#c0c0c0')
        rect(87 + i, 540, 25, 200);
        pop();

        // seat of the chair
        push();
        fill('#D4D4D4')
        strokeWeight(0.1)

        ellipse(100 + i, 530, 120, 30);
        pop();
    }


}
// Counter of the store 
function drawStoreCounter() {

    // Drawcounter colour
    push()
    noStroke()
    fill('#b4a7d6')
    rect(0, 420, width, 200)
    pop()


    //WHITE COUNTER 
    push();
    noStroke();
    fill('#fffff2');
    rect(0, height - 400, width, 50);
    pop();

    //WHITE BORDER 
    push();
    noStroke();
    fill('#D4D4D4');
    rect(0, height - 350, width, 20);
    pop();

    //Shade on green 
    push();
    noStroke();
    fill('#8e7cc3');
    rect(0, height - 330, width, 10);
    pop();

}



