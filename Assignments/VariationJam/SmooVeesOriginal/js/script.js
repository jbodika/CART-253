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
let plopSound;
let sadTromboneSound;
let cupFalling;



let menuBtn;
let restartBtn;


let foodBtn;
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
    //appleImg.image = loadImage('./assets/images/apple.png');
    //warAppleImg.image = loadImage('./assets/images/apple.png');
    //USE THIS LATER
    // Apple
    warAppleImg.image = loadImage('./assets/images/apple.png');
    appleImg.image = loadImage('./assets/images/apple.png');
    appleImg.openImage = loadImage('./assets/images/openApple.png');

    // Avocado
    warAvocadoImg.image = loadImage('./assets/images/avocado.png');
    avocadoImg.image = loadImage('./assets/images/avocado.png');
    avocadoImg.openImage = loadImage('./assets/images/openAvocado.png');

    // Banana
    warBananaImg.image = loadImage('./assets/images/banana.png');
    bananaImg.image = loadImage('./assets/images/banana.png');
    bananaImg.openImage = loadImage('./assets/images/openBanana.png');

    // Chia Seeds
    warChiaSeedsImg.image = loadImage('./assets/images/chiaSeeds.png');
    chiaSeedsImg.image = loadImage('./assets/images/chiaSeeds.png');
    chiaSeedsImg.openImage = loadImage('./assets/images/openChiaSeeds.png');

    // Cocoa Powder
    warCocoaPowderImg.image = loadImage('./assets/images/cocoaPowder.png');
    cocoaPowderImg.image = loadImage('./assets/images/cocoaPowder.png');
    cocoaPowderImg.openImage = loadImage('./assets/images/openCocoaPowder.png');

    // Coconut
    warCoconutImg.image = loadImage('./assets/images/coconut.png');
    coconutImg.image = loadImage('./assets/images/coconut.png');
    coconutImg.openImage = loadImage('./assets/images/openCoconut.png');

    // Frozen Berries
    warFrozenBerriesImg.image = loadImage('./assets/images/frozenBerries.png');
    frozenBerriesImg.image = loadImage('./assets/images/frozenBerries.png');
    frozenBerriesImg.openImage = loadImage('./assets/images/openFrozenBerries.png');

    // Honey Jar
    warHoneyjarImg.image = loadImage('./assets/images/honeyjar.png');
    honeyjarImg.image = loadImage('./assets/images/honeyjar.png');
    honeyjarImg.openImage = loadImage('./assets/images/openHoney.png');

    // Mango
    warMangoImg.image = loadImage('./assets/images/mango.png');
    mangoImg.image = loadImage('./assets/images/mango.png');
    mangoImg.openImage = loadImage('./assets/images/openMango.png');

    // Milk
    warMilkImg.image = loadImage('./assets/images/milk.png');
    milkImg.image = loadImage('./assets/images/milk.png');
    milkImg.openImage = loadImage('./assets/images/openMilk.png');

    // Orange
    warOrangeImg.image = loadImage('./assets/images/orange.png');
    orangeImg.image = loadImage('./assets/images/orange.png');
    orangeImg.openImage = loadImage('./assets/images/openOrange.png');

    // Orange Juice
    warOrangeJuiceImg.image = loadImage('./assets/images/orangeJuice.png');
    orangeJuiceImg.image = loadImage('./assets/images/orangeJuice.png');
    orangeJuiceImg.openImage = loadImage('./assets/images/openOrangeJuice.png');

    // Peanut Butter
    warPeanutButterImg.image = loadImage('./assets/images/peanutButter.png');
    peanutButterImg.image = loadImage('./assets/images/peanutButter.png');
    peanutButterImg.openImage = loadImage('./assets/images/openPeanutButter.png');

    // Pineapple
    warPineappleImg.image = loadImage('./assets/images/pineapple.png');
    pineappleImg.image = loadImage('./assets/images/pineapple.png');
    pineappleImg.openImage = loadImage('./assets/images/openPineapple.png');

    // Spinach

    warSpinachImg.image = loadImage('./assets/images/spinach.png');
    spinachImg.image = loadImage('./assets/images/spinach.png');
    spinachImg.openImage = loadImage('./assets/images/openSpinach.png');

    // Strawberry
    warStrawberryImg.image = loadImage('./assets/images/strawberry.png');
    strawberryImg.image = loadImage('./assets/images/strawberry.png');
    strawberryImg.openImage = loadImage('./assets/images/openStrawberry.png');

    // Water
    warWaterImg.image = loadImage('./assets/images/water.png');
    waterImg.image = loadImage('./assets/images/water.png');
    waterImg.openImage = loadImage('./assets/images/openWater.png');

    // Watermelon
    warWatermelonImg.image = loadImage('./assets/images/watermelon.png');
    watermelonImg.image = loadImage('./assets/images/watermelon.png');
    watermelonImg.openImage = loadImage('./assets/images/openWatermelon.png');

    // Yogurt
    warYogurtImg.image = loadImage('./assets/images/yogurt.png');
    yogurtImg.image = loadImage('./assets/images/yogurt.png');
    yogurtImg.openImage = loadImage('./assets/images/openYogurt.png');

    cuttingBoardImg = loadImage('./assets/images/cuttingBoard.png')

    // main screen images
    blenderImg = loadImage("./assets/images/blender.png");
    gameBlender.image = loadImage("./assets/images/blender.png");

    cherrySmoothieImg = loadImage("./assets/images/cherrySmoothie.png");
    limeSmoothieImg = loadImage("./assets/images/limeSmoothie.png");
    orangeSmoothieImg = loadImage("./assets/images/orangeSmoothie.png");
    veeImg = loadImage('./assets/images/Vee.png');

    // json files
    smoothies = loadJSON('./assets/data/smoothies.json');
    evilSmoothies = loadJSON('./assets/data/evilSmoothies.json');

    warDialog = loadJSON('./assets/data/foodWarTalking.json');
    veeTalking = loadJSON("./assets/data/veeTalking.json");

    // all sounds
    knifeSound = loadSound('./assets/audio/knife.mp3');
    // pouringSound = loadSound('./assets/audio/pour.mp3')
    blenderSound = loadSound('./assets/audio/blender.mp3')
    cashRegisterSound = loadSound('./assets/audio/cash-register.mp3')
    sadTromboneSound = loadSound('./assets/audio/sad-trombone.mp3')
    putSound = loadSound('./assets/audio/thud.mp3')
    liquidPourSound = loadSound('./assets/audio/liquidPour.mp3')
    solidPourSound = loadSound('./assets/audio/solidPour.mp3')
    plopSound = loadSound('./assets/audio/plop.mp3')
    cupFalling = loadSound('./assets/audio/cupFalling.mp3')





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
        drawIncorrectIngredientCount();
        drawSmoothieCup();
        drawCounterItems();
        drawMenu();
        drawOrder('SmooVee', smoothies.drinks);

        drawMovesLeft();
        previewFoodSelection();
        // blendIngredients()
    } else if (gameState == 'playWarGame') {

        background('#fffff2');
        drawAliveItems()
        drawMenu();
        drawDialog()
        moveLeaders()
        movePawns()
            // drawInGameCounter();
            // drawCounterItems();
            // drawMenu();
            // drawOrder('SmooVee WAR');
            // drawSmoothieCup();
            // previewFoodSelection();
            // drawDialog();
    } else if (gameState == 'playEvilGame') {
        // resetGameSettings()
        // background('#8e7cc3');
        // drawInGameCounter();
        // drawIncorrectIngredientCount();

        // drawCounterItems();
        // drawMenu();
        // drawOrder('SmooVee', evilSmoothies.drinks);
        // drawSmoothieCup();
        // drawMovesLeft();
        // previewFoodSelection();

        // displayVee()

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
// Class to handle all text boxes displayed on the screen
class TextArea {
    constructor(x, y, w, h, r) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.texts = [];

    }
    addText(txt, txtX, txtY, txtSize, txtCol = 'white') {
        this.texts.push({ txt, txtX, txtY, txtSize, txtCol })


    }
    display(bgCol = '#fff', stkCol = '#fff') {
        push();
        stroke(stkCol);
        strokeWeight(2);
        fill(bgCol);
        rect(this.x, this.y, this.w, this.h, this.r);

        for (let textData of this.texts) {
            fill(textData.txtCol);
            textSize(textData.txtSize);
            textAlign(CENTER);
            text(textData.txt, textData.txtX, textData.txtY);
        }

        pop();


    }
}

class Ingredients {
    constructor(name, image, x, y, width, height) {
        this.name = name;
        this.image = image; // Loaded image from preload()
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        if (this.image) {
            image(this.image, this.x, this.y, this.width, this.height);
        } else {
            console.warn(`Image not defined for fruit: ${this.name}`);
        }
    }

    move(dx = 0, dy = 0) {
        this.x += dx;
        this.y += dy;
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
            if (foodBtn) {
                foodBtn.elt.remove();
                foodBtn = null;
            }

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
let isLiquidTurn = true
let dialogActive = true;

function mouseClicked() {
    // allows the user to read what Vee has to say over and over again
    if (gameState == "main") {
        currSpeechIndex++;
        if (currSpeechIndex >= veeTalking.speech.length) {
            currSpeechIndex = 0; // restarts the speech 
        }
    } else if (gameState === "playWarGame") {
        currSpeechIndex++;
        if (isLiquidTurn && currSpeechIndex >= warDialog.dialog.liquids.length) {
            // switch to solids when liquids are done talking
            currSpeechIndex = 0;
            isLiquidTurn = false;
        } else if (!isLiquidTurn && currSpeechIndex >= warDialog.dialog.solids.length) {
            // stop dialog when solids are done talking
            dialogActive = false; // stop showing dialog
        }

    }

}

function mousePressed() {
    if (gameState == "playOriginalGame") {
        selectFood();
        clickToBlend();


        //blendIngredients()
        // serveDrink();
    } else if (gameState == "playEvilGame") {
        selectFood();
        clickToBlend();

        blendIngredients()

        // serveDrink();
    } else if (gameState == "playWarGame") {
        pushIngredient()
    }

}


function keyPressed() {
    if (key.toUpperCase() === 'O' && gameState == 'main') {
        gameState = 'playOriginalGame';
        console.log('orignal');
    } else if (key.toUpperCase() === 'R' && gameState == 'main') {
        gameState = 'playWarGame';
        currSpeechIndex = 0;
        console.log('reverse');

    } else if (key.toUpperCase() === 'Z' && gameState == 'main') {
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