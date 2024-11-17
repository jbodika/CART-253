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


let vee;
let font;
let strawberrySmoothie;
let orangeSmoothie;
let cherrySmoothie;
let limeSmoothie;
let blender;

let cabinets = {
    x:300,// starting position for the first cabinet, this will change for the others
    y:10,
    size:90

}

let cabinetHandles = {
    x:75,// starting position for the first cabinet handle, this will change for the others
    y:60,
    size:10

}

// created an object that holds the default values used when displaying an image to avoid repetition in code 
let defaultImg = {
    size: {
        x: 50,
        y: 50
    },
    y: 400

}

let chairs = {
    baseRing:{
        x: 100,
        y: 740,
        size:{
            x:60,
            y:20
        }
    },
    seat:{
        x: 100,
        y: 530,
        size:{
            x:120,
            y:30
        }
    },
    base:{
        x: 87,
        y: 540,
        size:{
            x:25,
            y:200
        }
    }
   

}
/**
 * Creates the canvas
 */
function setup() {
    createCanvas(800, 800);
}

/*
 * Function to load assets before the page is loaded
 */
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
 * Draws elements on the canvas
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

/**
 * Dsiplays the pixel smoothie and blender on the countertop
 */
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
/**
 * Draws the floor section
 */
function drawFloor() {
    // Ground
    push();
    noStroke();
    fill('#c9c3bd');
    rect(0, height - 100, width, 500);
    pop();

    //White floor border 
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
/**
 * Draws the 3 cabinets at top 
 */
function drawCabinets() {
    push();
    fill('#fffff2');
    noStroke();
    rect(0, 0, width, 115)
    pop();
    // draws the cabinets at the top to fill up space
    for (let i = cabinets.x ; i < 600; i += 120) {
        
        // draws the square section cabinet 
        push();
        noStroke();
        fill('#ECECEC');
        rect(i, cabinets.y, cabinets.size);
        pop();
    
        // draws the handle to the cabinet
        push()
        push();
        stroke('#c0c0c0')
        fill('#D4D4D4');
        ellipse(cabinetHandles.x + i, cabinetHandles.y, cabinetHandles.size)
        pop()
    }
}


function drawChairs() {


    for (let i = 0; i < 800; i += 200) {
        // base of the chair ring
        push();
        strokeWeight(0.1)

        fill("#D4D4D4")

        ellipse(chairs.baseRing.x + i, chairs.baseRing.y, chairs.baseRing.size.x, chairs.baseRing.size.y);
        pop();
        // base of the chair
        push();
        strokeWeight(0.1)
        fill('#c0c0c0')
        rect(chairs.base.x + i, chairs.base.y, chairs.base.size.x, chairs.base.size.y);
        pop();

        // seat of the chair
        push();
        fill('#D4D4D4')
        strokeWeight(0.1)

        ellipse(chairs.seat.x + i, chairs.seat.y, chairs.seat.size.x, chairs.seat.size.y);
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



