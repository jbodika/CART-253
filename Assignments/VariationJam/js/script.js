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


let knifeSound;
let pouringSound;
let blenderSound;
let cashRegisterSound;
let sadTromboneSound;


let menuBtn;
let restartBtn;


let foodBtn;
/**
 * Creates the canvas
 */
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("canvasDiv")
}

/*
 * Function to load assets before the page is loaded
 */
function preload() {
    watermelonImg.image = loadImage('./assets/images/watermelon.png');
    watermelonImg.openImage = loadImage('./assets/images/openWatermelon.png')
    frozenBerriesImg.image = loadImage('./assets/images/frozenBerries.png');
    frozenBerriesImg.openImage = loadImage('./assets/images/openFrozenBerries.png');

    cuttingBoardImg.image = loadImage('./assets/images/cuttingBoard.png')
    bananaImg.image = loadImage('./assets/images/banana.png');
    bananaImg.openImage = loadImage('./assets/images/openBanana.png');

    orangeImg.image = loadImage('./assets/images/orange.png');
    honeyjarImg.image = loadImage('./assets/images/honeyjar.png');
    milkImg.image = loadImage('./assets/images/milk.png');
    milkImg.openImage = loadImage('./assets/images/pouredMilk.png')
    yogurtImg.image = loadImage('./assets/images/yogurt.png');
    veeImg = loadImage('./assets/images/Vee.png');
    veeTalking = loadJSON("./assets/data/veeTalking.json");
    bagelFatOneFont = loadFont('./assets/fonts/BagelFatOne-Regular.ttf');
    blenderImg = loadImage("./assets/images/blender.png");
    cherrySmoothieImg = loadImage("./assets/images/cherrySmoothie.png");
    limeSmoothieImg = loadImage("./assets/images/limeSmoothie.png");
    orangeSmoothieImg = loadImage("./assets/images/orangeSmoothie.png");

    smoothies = loadJSON('./assets/data/smoothies.json');

    knifeSound = loadSound('./assets/audio/knife.mp3');
    pouringSound = loadSound('./assets/audio/pour.mp3')
    blenderSound = loadSound('./assets/audio/blender.mp3')
    cashRegisterSound = loadSound('./assets/audio/cash-register.mp3')
    sadTromboneSound = loadSound('./assets/audio/sad-trombone.mp3')
}

/**
 * Draws elements on the canvas
 */
function draw() {
    textFont(bagelFatOneFont);
    smooVeesLayout();
    mainScreenLayout();
}

function smooVeesLayout() {
    if (gameState == 'playOriginalGame') {
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

/**
 * Draws the menu circles
 */
function drawMenu() {
    // checks if there's already a menuBtn element on the canvas
    if (!menuBtn) {
        menuBtn = createButton('Main Menu');
        menuBtn.parent("canvasDiv")
        menuBtn.position(650, 730);
        menuBtn.addClass('btn'); //for styling purposes



        menuBtn.mousePressed(() => {
            if (menuBtn) {
                menuBtn.elt.remove();
                menuBtn = null;

            }
            if (restartBtn) {
                restartBtn.elt.remove();
                restartBtn = null;
                activeSmoothie = randomizeElement(smoothies.drinks)
                gameInProgress = false;
                foodAction = null;
                numOfChops = 0; // max amount of time the player can chop 
                numOfPours = 0;
                chosenFoods = []
                smooVeesLayout();


            }

            if (foodBtn) {
                foodBtn.elt.remove();
                foodBtn = null;
            }


            gameState = "main";
            mainScreenLayout();
        });

    }

    if (!restartBtn) {
        restartBtn = createButton('Restart');
        restartBtn.parent("canvasDiv")
        restartBtn.position(500, 730);
        restartBtn.addClass('btn'); //for styling purposes

        restartBtn.mousePressed(() => {

            if (restartBtn) {
                restartBtn.elt.remove();
                restartBtn = null;
                // activeSmoothie = randomizeElement(smoothies.drinks)
                resetGameSettings()
            }

        });

    }

}



function mainScreenLayout() {
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
        clickToBlend();
        serveDrink();
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