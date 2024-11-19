/*
* Vee's Smoothie Shop 
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


let veeImg;
let bagelFatOneFont;
let veeTalking;
let currSpeechIndex = 0; // starts at the first speech 
let orangeSmoothieImg;
let cherrySmoothieImg;
let limeSmoothieImg;
let blenderImg;
let gameState = 'main';
//Variables from SmooVees **I had to create them here because I cannot have a secon preload function (it would override the first one)
let watermelonImg;
let frozenBerriesImg;
let cuttingBoardImg;
let bananaImg;
let orangeImg;
let honeyjarImg;
let milkImg;
let yogurtImg;
let smoothies;


let cabinets = {
    x: 0, // starting position for the first cabinet, this will change for the others
    y: 10,
    size: 95

};

let cabinetHandles = {
    x: 75, // starting position for the first cabinet handle, this will change for the others
    y: 60,
    size: 10

};

// created an object that holds the default values used when displaying an image to avoid repetition in code 
let defaultImg = {
    size: {
        x: 50,
        y: 50
    },
    y: 400

};

let chairs = {
    baseRing: {
        x: 100,
        y: 740,
        size: {
            x: 60,
            y: 20
        }
    },
    seat: {
        x: 100,
        y: 530,
        size: {
            x: 120,
            y: 30
        }
    },
    base: {
        x: 87,
        y: 540,
        size: {
            x: 25,
            y: 200
        }
    }


};
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
    watermelonImg = loadImage('./assets/images/watermelon.png');
    frozenBerriesImg = loadImage('./assets/images/frozenBerries.png');
    cuttingBoardImg = loadImage('./assets/images/cuttingBoard.png')
    veeImg = loadImage('./assets/images/Vee.png');
    veeTalking = loadJSON("./assets/data/veeTalking.json");
    bagelFatOneFont = loadFont('./assets/fonts/BagelFatOne-Regular.ttf');
    blenderImg = loadImage("./assets/images/blender.png");
    cherrySmoothieImg = loadImage("./assets/images/cherrySmoothie.png");
    limeSmoothieImg = loadImage("./assets/images/limeSmoothie.png");
    orangeSmoothieImg = loadImage("./assets/images/orangeSmoothie.png");
    bananaImg = loadImage('./assets/images/banana.png');
    orangeImg = loadImage('./assets/images/orange.png');
    honeyjarImg = loadImage('./assets/images/honeyjar.png');
    milkImg = loadImage('./assets/images/milk.png');
    yogurtImg = loadImage('./assets/images/yogurt.png');
    smoothies = loadJSON('./assets/data/smoothies.json')
}

/**
 * Draws elements on the canvas
 */
function draw() {
    if (gameState == 'main') {
        background('#b4a7d6');
        drawWindow();
        drawReflectiveGlass();
        drawBackgroundCounter();

        image(veeImg, width / 2, 150)
        drawFloor();

        drawStoreCounter();
        drawDecorations();

        drawChairs();
        drawCabinets();
        drawWelcomeMessage();
        drawSpeechBubble();
        drawVeesSpeech();
    } else if (gameState == 'playOriginalGame') {
        //All functions here can be found in the smooVees.js file
        background('#b4a7d6');
        drawInGameCounter();
        drawCounterItems();
        drawMenu();

        drawOrder()
        drawSmoothieCup()
    }


}

/**
 * Dsiplays the pixel smoothie and blender on the countertop
 */
function drawDecorations() {
    // image(strawberrySmoothie, 520, defaultImg.y, defaultImg.size.x, defaultImg.size.y)
    image(cherrySmoothieImg, 720, defaultImg.y, defaultImg.size.x, defaultImg.size.y);
    image(limeSmoothieImg, 130, defaultImg.y, defaultImg.size.x, defaultImg.size.y);
    image(orangeSmoothieImg, 330, defaultImg.y, defaultImg.size.x, defaultImg.size.y);
    image(blenderImg, 700, 285, 40, 70);

}


function drawWelcomeMessage() {
    //  Create the up-down movement for the hearts with the sin() function
    let speed = 0.05;
    let yOffset = sin(frameCount * speed) * 5; // Adjust the amplitude by 5

    // display shading green for the text
    push();
    fill('#a64d79');
    stroke('pink');
    strokeWeight(5);

    textFont(bagelFatOneFont);
    textSize(80);
    text('Vee\'s\nSmoothie\nShop!', 50, 205 + yOffset);
    //text(test, 50, 205 + yOffset);

    pop();

    // displays the main pink for the text
    push();
    stroke('pink');
    strokeWeight(5);

    fill('#c27ba0');
    textFont(bagelFatOneFont);
    textSize(80);
    text('Vee\'s\nSmoothie\nShop!', 55, 200 + yOffset);

    pop();

}


function mouseClicked() {
    currSpeechIndex++;
    if (currSpeechIndex >= veeTalking.speech.length) {
        currSpeechIndex = 0; // restarts the speech 
    }
}


function keyPressed() {
    if (key.toUpperCase() === 'O') {
        gameState = 'playOriginalGame';
        console.log('orignal');
    } else if (key.toUpperCase() === 'R') {
        console.log('reverse');

    } else if (key.toUpperCase() === 'Z') {
        console.log('z gravity');

    }
}

/**
 * Draws Vee's speech bubble
 */
function drawSpeechBubble() {
    push();
    stroke('pink');
    fill('#FBF9D3');
    strokeWeight(5);
    rect(600, 120, 175, 180, 20); // rectangle speech bubble with rounded borders
    pop();
}

/**
 * Displays text 
 */
function drawVeesSpeech() {
    push();
    textFont(bagelFatOneFont);
    fill('#546DA6');
    stroke('white');
    strokeWeight(3);
    textSize(30);
    // if theres a value that matches the current speech index it will change the text value in the speech bubble
    if (veeTalking.speech[currSpeechIndex]) {
        text(veeTalking.speech[currSpeechIndex].text, 605, 150);
    }
    pop();
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
    noStroke();
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
    push();
    strokeWeight(10);
    stroke('white');
    fill('#CAE9F5');
    rect(50, 170, 700, 140);
    pop();




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
    rect(0, 0, width, 115);
    pop();
    // draws the cabinets at the top to fill up space
    for (let i = cabinets.x; i < 800; i += 100) {

        // draws the square section cabinet 
        push();
        noStroke();
        fill('#ECECEC');
        rect(i, cabinets.y, cabinets.size);
        pop();

        // draws the handle to the cabinet
        push();
        push();
        stroke('#c0c0c0');
        fill('#D4D4D4');
        ellipse(cabinetHandles.x + i, cabinetHandles.y, cabinetHandles.size);
        pop();
    }
}


function drawChairs() {
    for (let i = 0; i < 800; i += 200) {
        // base of the chair ring
        push();
        strokeWeight(0.1);

        fill("#D4D4D4");

        ellipse(chairs.baseRing.x + i, chairs.baseRing.y, chairs.baseRing.size.x, chairs.baseRing.size.y);
        pop();
        // base of the chair
        push();
        strokeWeight(0.1);
        fill('#c0c0c0');
        rect(chairs.base.x + i, chairs.base.y, chairs.base.size.x, chairs.base.size.y);
        pop();

        // seat of the chair
        push();
        fill('#D4D4D4');
        strokeWeight(0.1);

        ellipse(chairs.seat.x + i, chairs.seat.y, chairs.seat.size.x, chairs.seat.size.y);
        pop();
    }

}
// Counter of the store 
function drawStoreCounter() {

    // Drawcounter colour
    push();
    noStroke();
    fill('#b4a7d6');
    rect(0, 420, width, 200);
    pop();


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

    //Shade on purple countertop 
    push();
    noStroke();
    fill('#8e7cc3');
    rect(0, height - 330, width, 10);
    pop();

}