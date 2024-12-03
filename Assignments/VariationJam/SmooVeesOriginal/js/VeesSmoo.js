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
let warApple = new Ingredient("Green Apple", undefined, null, 670, 450, 32);
let warAvocado = new Ingredient("Avocado", undefined, null, 700, 450, 64);
let warBanana = new Ingredient("Banana", undefined, null, 600, 430, 64);
let warChiaSeeds = new Ingredient("Chia Seeds", undefined, null, 740, 500, 90);
let warCocoaPowder = new Ingredient("Cocoa Powder", undefined, null, 775, 350, 90);
let warCoconut = new Ingredient("Coconut Water", undefined, null, 450, 375, 64);
let warFrozenBerries = new Ingredient("Frozen Berries", undefined, null, 670, 260, 125);
let warHoneyjar = new Ingredient("Honey", undefined, null, 510, 450, 90);
let warMango = new Ingredient("Mango Chunks", undefined, null, 500, 375, 64);
let warMilk = new Ingredient("Milk", undefined, null, 450, 290, 85);
let warOrange = new Ingredient("Orange", undefined, null, 630, 400, 32);
let warOrangeJuice = new Ingredient("Orange Juice", undefined, null, 325, 300, 80);
let warPeanutButter = new Ingredient("Peanut Butter", undefined, null, 550, 400, 64);
let warPineapple = new Ingredient("Pineapple Chunks", undefined, null, 720, 375, 125);
let warSpinach = new Ingredient("Spinach Leaves", undefined, null, 635, 350, 64);
let warStrawberry = new Ingredient("Strawberry", undefined, null, 635, 480, 32);
let warWater = new Ingredient("Water", undefined, null, 400, 300, 80);
let warWatermelon = new Ingredient("Watermelon", undefined, null, 550, 300, 125);
let warYogurt = new Ingredient("Yogurt", undefined, null, 750, 280, 64);

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
            // image(el.image, el.x - el.size / 2, el.y - el.size / 2, el.size, el.size);
    });

    // Display all liquids
    liquids.forEach((el) => {
        image(el.image, el.x - el.size / 2, el.y - el.size / 2, el.size, el.size);
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
 * Function to move the pawn ingredients on the screen
 */
function movePawns() {
    if (!dialogActive) {
        // Move solids
        solids.forEach(el => {
            el.y += 1; // Move downward
        });

        // Move liquids
        liquids.forEach(el => {
            el.y -= 1; // Move upward
        });
    }
}

function pushIngredient() {
    solids.forEach((ingredient) => {
        if (checkOverlap(mouseX, mouseY, ingredient.x, ingredient.y, ingredient.size)) {
            ingredient.y -= 30; // Push upward
        }
    });

    liquids.forEach((ingredient) => {
        if (checkOverlap(mouseX, mouseY, ingredient.x, ingredient.y, ingredient.size)) {
            ingredient.y += 30; // Push downward
        }
    });
}

function retractSituation() {

}