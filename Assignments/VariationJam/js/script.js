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

let bagelFatOneFont;
let isMouseOverlapping;
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
    watermelonImg.image = loadImage('./assets/images/watermelon.png');
    frozenBerriesImg.image = loadImage('./assets/images/frozenBerries.png');
    cuttingBoardImg.image = loadImage('./assets/images/cuttingBoard.png')
    veeImg = loadImage('./assets/images/Vee.png');
    veeTalking = loadJSON("./assets/data/veeTalking.json");
    bagelFatOneFont = loadFont('./assets/fonts/BagelFatOne-Regular.ttf');
    blenderImg = loadImage("./assets/images/blender.png");
    cherrySmoothieImg = loadImage("./assets/images/cherrySmoothie.png");
    limeSmoothieImg = loadImage("./assets/images/limeSmoothie.png");
    orangeSmoothieImg = loadImage("./assets/images/orangeSmoothie.png");
    bananaImg.image = loadImage('./assets/images/banana.png');
    orangeImg.image = loadImage('./assets/images/orange.png');
    honeyjarImg.image = loadImage('./assets/images/honeyjar.png');
    milkImg.image = loadImage('./assets/images/milk.png');
    yogurtImg.image = loadImage('./assets/images/yogurt.png');
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
        drawOrder();
        drawSmoothieCup();
        previewFoodSelection();

    }


}


function mouseClicked() {
    // allows the user to read what Vee has to say over and over again
    if (gameState == "main") {
        currSpeechIndex++;
        if (currSpeechIndex >= veeTalking.speech.length) {
            currSpeechIndex = 0; // restarts the speech 
        }
    }

}

function mousePressed() {
    if (gameState == "playOriginalGame") {
        selectFood();
    }

}


function keyPressed() {
    if (key.toUpperCase() === 'O' && gameState == 'main') {
        gameState = 'playOriginalGame';
        console.log('orignal');
    } else if (key.toUpperCase() === 'R' && gameState == 'main') {
        console.log('reverse');

    } else if (key.toUpperCase() === 'Z' && gameState == 'main') {
        console.log('z gravity');

    }
}

/* Checks if the cursor overlaps with an object
 *
 * @param firstValPosX - Object 1's value X position
 * @param firstValPosY - Object 1's value Y position
 * @param secondValPosX - Object 2's value X position
 * @param secondValPosY - Object 2's value Y position
 * @param secondValSize - Object 2's size value
 */
function checkOverlap(firstValPosX, firstValPosY, secondValPosX, secondValPosY, secondValSize) {
    const distance = dist(firstValPosX, firstValPosY, secondValPosX, secondValPosY); // code snippet taken from the conditionals challenge
    // calculates the distance between the first value's X position and first value's Y position positions and the second value's X and y positions
    return isMouseOverlapping = (distance < secondValSize / 2); //checks if the distance is lower than the radius of the size of the second value if yes then it is overlapping if no then it is not overlapping
}


function randomizeElement(array) {
    if (!gameInProgress) {
        gameInProgress = true;
        randomizedValue = array[Math.floor(Math.random() * array.length)];
    }
    return randomizedValue; // Returns a single smoothie object 
}