/*
 * VeesSmoo 
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


let warDialog;

let warApple = new Ingredient("Green Apple", undefined, null, 30, -100, 32, 'solid');
let warAvocado = new Ingredient("Avocado", undefined, null, 75, -100, 64, 'solid');
let warBanana = new Ingredient("Banana", undefined, null, 600, -100, 64, 'solid');
let warChiaSeeds = new Ingredient("Chia Seeds", undefined, null, 740, -100, 90, 'solid');
let warCocoaPowder = new Ingredient("Cocoa Powder", undefined, null, 775, -100, 90, 'solid');
let warMango = new Ingredient("Mango Chunks", undefined, null, 500, -100, 64, 'solid');
let warOrange = new Ingredient("Orange", undefined, null, 630, -100, 32, 'solid');
let warPineapple = new Ingredient("Pineapple", undefined, null, 720, -100, 125, 'solid');
let warSpinach = new Ingredient("Spinach Leaves", undefined, null, 635, -100, 64, 'solid');
let warStrawberry = new Ingredient("Strawberry", undefined, null, 635, -100, 32, 'solid');
let warWatermelon = new Ingredient("Watermelon", undefined, null, 550, -100, 125, 'solid');
let warFrozenBerries = new Ingredient("Frozen Berries", undefined, null, 670, -100, 125, 'solid');

let warCoconut = new Ingredient("Coconut Water", undefined, null, Math.random(20, 600), 830, 64, 'liquid');
let warHoneyjar = new Ingredient("Honey", undefined, null, 510, 845, 90, 'liquid');
let warMilk = new Ingredient("Milk", undefined, null, 450, 830, 85, 'liquid');
let warOrangeJuice = new Ingredient("Orange Juice", undefined, null, 325, 845, 80, 'liquid');
let warPeanutButter = new Ingredient("Peanut Butter", undefined, null, 550, 830, 64, 'liquid');
let warWater = new Ingredient("Water", undefined, null, 400, 830, 80, 'liquid');
let warYogurt = new Ingredient("Yogurt", undefined, null, 750, 830, 64, 'liquid');

let warIngredients = [warYogurt, warApple, warAvocado, warBanana, warChiaSeeds, warCocoaPowder, warCoconut, warFrozenBerries, warHoneyjar, warMango, warMilk, warOrange, warOrangeJuice, warPeanutButter, warPineapple, warSpinach, warStrawberry, warWater, warWatermelon];

let liquids = [warCoconut, warHoneyjar, warOrangeJuice, warPeanutButter, warWater, warYogurt];
let solids = [warApple, warAvocado, warBanana, warChiaSeeds, warCocoaPowder, warFrozenBerries, warMango, warOrange, warPineapple, warSpinach, warStrawberry];

console.log(solids)

let solidLeaderImg = {
    x: 350,
    y: -10,
    size: 175
};


let liquidsLeaderImg = {
    x: 350, //350
    y: 800, //420
    size: 175
};

console.log(images)

/**
 * Function to move the leader ingredients on the screen
 */
function moveLeaders() {
    liquidsLeaderImg.y = constrain(liquidsLeaderImg.y, liquidsLeaderImg.y - 2.5, 420);
    solidLeaderImg.y = constrain(solidLeaderImg.y + 1, -10, 145);

}

function drawDialog() {
    if (dialogActive) {
        let textArea = new TextArea(300, 325, 275, 75, 20);
        // Display current dialog
        if (isLiquidTurn && warDialog.dialog.liquids[currSpeechIndex]) {
            textArea.addText(warDialog.dialog.liquids[currSpeechIndex], 430, 355, 20, 'black');
            textArea.display('lightblue');
        } else if (!isLiquidTurn && warDialog.dialog.solids[currSpeechIndex]) {
            textArea.addText(warDialog.dialog.solids[currSpeechIndex], 430, 355, 20, 'black');
            textArea.display('lightgreen');
        }


    }
}

function drawAliveItems() {
    // Display all solids
    solids.forEach((el) => {
        el.display()

    });

    // Display all liquids
    liquids.forEach((el) => {
        el.display()

    });

    // Leaders
    image(watermelon.image, solidLeaderImg.x, solidLeaderImg.y, solidLeaderImg.size, solidLeaderImg.size);
    image(milk.image, liquidsLeaderImg.x, liquidsLeaderImg.y, liquidsLeaderImg.size, liquidsLeaderImg.size);

    // Remove offscreen items
    removeOffscreenItems();
}

/**
 * Remove offscreen solids and liquids
 */
function removeOffscreenItems() {
    // Remove solids that are fully offscreen
    solids = solids.filter(el => el.y <= height + el.size);

    // Remove liquids that are fully offscreen 
    liquids = liquids.filter(el => el.y >= -el.size);
}

/**
 * Function to move the pawn ingredients on the screen on their own
 */
function movePawns() {
    if (!dialogActive) {
        // Move liquids snd solids with their randomized speeds

        solids.forEach(ingredient => {
            ingredient.y += ingredient.speed; // Move downward with random speed
        });


        liquids.forEach(ingredient => {
            ingredient.y -= ingredient.speed; // Move upward with random speed
        });
    }
}

function pushIngredient() {
    angryCrowdSound.play()
    if (!dialogActive) {
        solids.forEach((ingredient) => {
            if (checkOverlap(mouseX, mouseY, ingredient.x, ingredient.y, ingredient.size)) {
                ingredient.y -= 30; //  upwards
            }
        });

        liquids.forEach((ingredient) => {
            if (checkOverlap(mouseX, mouseY, ingredient.x, ingredient.y, ingredient.size)) {
                ingredient.y += 30; //  downwards
            }
        });
    }
}
/**
 * War is over
 */
function retractSituation() {

}