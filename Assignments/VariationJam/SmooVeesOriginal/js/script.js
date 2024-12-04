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


let knifeSound;
let liquidPourSound;
let solidPourSound;
let blenderSound;
let cashRegisterSound;
let putSound;
let swordSound;
let plopSound;
let sadTromboneSound;
let cupFalling;
let isLiquidTurn = true
let dialogActive = true;

let bloodSplatterImg;
let menuBtn;
let restartBtn;


let ingredientActionBtn;
let backBtn;

/**
 * Creates the canvas
 */
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("canvasDiv")
}
let images = {};
/*
 * Function to load assets before the page is loaded
 */
function preload() {
    //font
    bagelFatOneFont = loadFont('./assets/fonts/BagelFatOne-Regular.ttf');

    // all food elements, image is the image we see on the counter and openImage is the cut or poured version of the food element
    warApple.image = loadImage('./assets/images/apple.png');
    warApple.openImage = loadImage('./assets/images/openApple.png');
    apple.image = loadImage('./assets/images/apple.png');
    apple.openImage = loadImage('./assets/images/openApple.png');

    // Avocado
    warAvocado.image = loadImage('./assets/images/avocado.png');
    warAvocado.openImage = loadImage('./assets/images/openAvocado.png');
    avocado.image = loadImage('./assets/images/avocado.png');
    avocado.openImage = loadImage('./assets/images/openAvocado.png');

    // Banana
    warBanana.image = loadImage('./assets/images/banana.png');
    warBanana.openImage = loadImage('./assets/images/openBanana.png');
    banana.image = loadImage('./assets/images/banana.png');
    banana.openImage = loadImage('./assets/images/openBanana.png');


    // Chia Seeds
    warChiaSeeds.image = loadImage('./assets/images/chiaSeeds.png');
    warChiaSeeds.openImage = loadImage('./assets/images/openChiaSeeds.png');
    chiaSeeds.image = loadImage('./assets/images/chiaSeeds.png');
    chiaSeeds.openImage = loadImage('./assets/images/openChiaSeeds.png');

    // Cocoa Powder
    warCocoaPowder.image = loadImage('./assets/images/cocoaPowder.png');
    warCocoaPowder.openImage = loadImage('./assets/images/openCocoaPowder.png');
    cocoaPowder.image = loadImage('./assets/images/cocoaPowder.png');
    cocoaPowder.openImage = loadImage('./assets/images/openCocoaPowder.png');

    // Coconut
    warCoconut.image = loadImage('./assets/images/coconut.png');
    warCoconut.openImage = loadImage('./assets/images/openCoconut.png');
    coconut.image = loadImage('./assets/images/coconut.png');
    coconut.openImage = loadImage('./assets/images/openCoconut.png');

    // Frozen Berries
    warFrozenBerries.image = loadImage('./assets/images/frozenBerries.png');
    warFrozenBerries.openImage = loadImage('./assets/images/openFrozenBerries.png');
    frozenBerries.image = loadImage('./assets/images/frozenBerries.png');
    frozenBerries.openImage = loadImage('./assets/images/openFrozenBerries.png');

    // Honey Jar
    warHoneyjar.image = loadImage('./assets/images/honeyjar.png');
    warHoneyjar.openImage = loadImage('./assets/images/openHoney.png');
    honeyjar.image = loadImage('./assets/images/honeyjar.png');
    honeyjar.openImage = loadImage('./assets/images/openHoney.png');

    // Mango
    warMango.image = loadImage('./assets/images/mango.png');
    warMango.openImage = loadImage('./assets/images/openMango.png');
    mango.image = loadImage('./assets/images/mango.png');
    mango.openImage = loadImage('./assets/images/openMango.png');

    // Milk
    warMilk.image = loadImage('./assets/images/milk.png');
    warMilk.openImage = loadImage('./assets/images/openMilk.png');
    milk.image = loadImage('./assets/images/milk.png');
    milk.openImage = loadImage('./assets/images/openMilk.png');

    // Orange
    warOrange.image = loadImage('./assets/images/orange.png');
    warOrange.openImage = loadImage('./assets/images/openOrange.png');
    orange.image = loadImage('./assets/images/orange.png');
    orange.openImage = loadImage('./assets/images/openOrange.png');

    // Orange Juice
    warOrangeJuice.image = loadImage('./assets/images/orangeJuice.png');
    warOrangeJuice.openImage = loadImage('./assets/images/openOrangeJuice.png');
    orangeJuice.image = loadImage('./assets/images/orangeJuice.png');
    orangeJuice.openImage = loadImage('./assets/images/openOrangeJuice.png');

    // Peanut Butter
    warPeanutButter.image = loadImage('./assets/images/peanutButter.png');
    warPeanutButter.openImage = loadImage('./assets/images/openPeanutButter.png');
    peanutButter.image = loadImage('./assets/images/peanutButter.png');
    peanutButter.openImage = loadImage('./assets/images/openPeanutButter.png');

    // Pineapple
    warPineapple.image = loadImage('./assets/images/pineapple.png');
    warPineapple.openImage = loadImage('./assets/images/openPineapple.png');
    pineapple.image = loadImage('./assets/images/pineapple.png');
    pineapple.openImage = loadImage('./assets/images/openPineapple.png');

    // Spinach

    warSpinach.image = loadImage('./assets/images/spinach.png');
    warSpinach.openImage = loadImage('./assets/images/openSpinach.png');
    spinach.image = loadImage('./assets/images/spinach.png');
    spinach.openImage = loadImage('./assets/images/openSpinach.png');

    // Strawberry
    warStrawberry.image = loadImage('./assets/images/strawberry.png');
    warStrawberry.openImage = loadImage('./assets/images/openStrawberry.png');
    strawberry.image = loadImage('./assets/images/strawberry.png');
    strawberry.openImage = loadImage('./assets/images/openStrawberry.png');

    // Water
    warWater.image = loadImage('./assets/images/water.png');
    warWater.openImage = loadImage('./assets/images/openWater.png');
    water.image = loadImage('./assets/images/water.png');
    water.openImage = loadImage('./assets/images/openWater.png');

    // Watermelon
    warWatermelon.image = loadImage('./assets/images/watermelon.png');
    warWatermelon.openImage = loadImage('./assets/images/openWatermelon.png');

    watermelon.image = loadImage('./assets/images/watermelon.png');
    watermelon.openImage = loadImage('./assets/images/openWatermelon.png');

    // Yogurt
    warYogurt.image = loadImage('./assets/images/yogurt.png');
    warYogurt.openImage = loadImage('./assets/images/openYogurt.png');
    yogurt.image = loadImage('./assets/images/yogurt.png');
    yogurt.openImage = loadImage('./assets/images/openYogurt.png');

    cuttingBoardImg = loadImage('./assets/images/cuttingBoard.png')

    // main screen images
    blenderImg = loadImage("./assets/images/blender.png");
    gameBlender.image = loadImage("./assets/images/blender.png");

    cherrySmoothieImg = loadImage("./assets/images/cherrySmoothie.png");
    limeSmoothieImg = loadImage("./assets/images/limeSmoothie.png");
    orangeSmoothieImg = loadImage("./assets/images/orangeSmoothie.png");
    bloodSplatterImg = loadImage("./assets/images/bloodSplatter.png");

    veeImg = loadImage('./assets/images/Vee.png');

    // json files
    smoothies = loadJSON('./assets/data/smoothies.json');
    evilSmoothies = loadJSON('./assets/data/evilSmoothies.json');

    warDialog = loadJSON('./assets/data/foodWarTalking.json');
    veeTalking = loadJSON("./assets/data/veeTalking.json");

    // all sounds
    knifeSound = loadSound('./assets/audio/knife.mp3');
    blenderSound = loadSound('./assets/audio/blender.mp3')
    cashRegisterSound = loadSound('./assets/audio/cash-register.mp3')
    sadTromboneSound = loadSound('./assets/audio/sad-trombone.mp3')
    putSound = loadSound('./assets/audio/thud.mp3')
    liquidPourSound = loadSound('./assets/audio/liquidPour.mp3')
    solidPourSound = loadSound('./assets/audio/solidPour.mp3')
    plopSound = loadSound('./assets/audio/plop.mp3')
    cupFalling = loadSound('./assets/audio/cupFalling.mp3')
    swordSound = loadSound('./assets/audio/sword.mp3')
}

/**
 * Draws elements on the canvas
 */
function draw() {
    textFont(bagelFatOneFont);
    mainScreenLayout();
    smooVeesLayout();

}

function smooVeesLayout() {


    if (gameState == 'playOriginalGame') {
        //All functions here can be found in the smooVees.js file


        background('#c79274');
        drawInGameCounter();
        drawSmoothieCup();
        drawIncorrectIngredientCount();

        drawCounterItems();
        drawMenu();
        drawOrder('SmooVee', smoothies.drinks);

        drawMovesLeft();
        previewFoodSelection();

        // blendIngredients()
    } else if (gameState === "playWarGame") {
        drawMenu()
        background('#fffff2');
        drawAliveItems();
        moveLeaders();
        movePawns();
        drawSplatters();
        displayEscapedIngredients()
        checkAndShowDialog(); // Ensure dialogActive is set
        drawDialog(); // Draw the appropriate dialog

    } else if (gameState == 'playEvilGame') {


        background('#946656');
        drawInGameCounter();
        drawIncorrectIngredientCount();

        drawCounterItems();
        drawMenu();
        drawOrder('SmooVee', evilSmoothies.drinks);
        drawSmoothieCup();
        displayVee();
        drawMovesLeft();
        previewFoodSelection();
    } else if (gameState == 'main') {
        resetGameSettings()

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
                resetGameSettings()

            }
            if (restartBtn) {
                restartBtn.elt.remove();
                restartBtn = null;
                resetGameSettings()


            }

            if (ingredientActionBtn) {
                ingredientActionBtn.elt.remove();
                ingredientActionBtn = null;
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
            if (ingredientActionBtn) {
                ingredientActionBtn.elt.remove();
                ingredientActionBtn = null;
            }

            if (restartBtn) {
                restartBtn.elt.remove();
                restartBtn = null;
                resetGameSettings()
            }


        });

    }

}



function mainScreenLayout() {
    if (gameState == 'main') {
        background('#946656');
        drawWindow();
        drawReflectiveGlass();

        drawBackgroundCounter();
        image(veeImg, width / 2, 145, 200, 600)

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
    } else if (gameState === "playWarGame") {
        currSpeechIndex++;
        if (
            isLiquidTurn &&
            currSpeechIndex >= warDialog.dialog2.liquids.length
        ) {
            currSpeechIndex = 0;
            isLiquidTurn = false; // Switch turn
        } else if (!isLiquidTurn &&
            currSpeechIndex >= warDialog.dialog2.solids.length
        ) {
            dialogActive = false; // End dialog
            moveLeadersBack = true; // Trigger movement
        }
    }

}

function mousePressed() {
    if (gameState == "playOriginalGame") {
        selectFood();
        clickToBlend();
        blendIngredients()
    } else if (gameState == "playEvilGame") {
        selectFood();
        clickToBlend();
        blendIngredients()
    } else if (gameState == "playWarGame") {
        pushIngredient()
        checkAndShowDialog();

    }

}


function keyPressed() {
    if (key.toUpperCase() === 'L' && gameState == 'main') {
        gameState = 'playOriginalGame';
        console.log('orignal');
    } else if (key.toUpperCase() === 'I' && gameState == 'main') {
        gameState = 'playWarGame';
        currSpeechIndex = 0;
        console.log('reverse');

    } else if (key.toUpperCase() === 'E' && gameState == 'main') {
        gameState = 'playEvilGame';


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
    return distance < secondValSize / 2; //checks if the distance is lower than the radius of the size of the second value if yes then it is overlapping if no then it is not overlapping
}


function randomizeElement(array) {
    if (!gameInProgress) {
        gameInProgress = true;
        randomizedValue = array[Math.floor(Math.random() * array.length)];
    }
    return randomizedValue; // Returns a single smoothie object 
}