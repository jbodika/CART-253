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




function mouseClicked() {
    // allows the user to read what Vee has to say over and over again
    if(gameState=="main"){
        currSpeechIndex++;
        if (currSpeechIndex >= veeTalking.speech.length) {
            currSpeechIndex = 0; // restarts the speech 
        }
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

