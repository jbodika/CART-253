/*
* Floatie SmooVee
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
let evilSmoothies;
let evilIndex = 0;
let vee = new Vee(undefined, 0, 10, 200, 600);
let veeMood = 'neutral';
let veeTextArea = new TextArea(20, 675, 500, 80, 20);

const evilApple = new Ingredient("Green Apple", undefined, undefined, 670, 450, 32, "cut", "cut");
const evilAvocado = new Ingredient("Avocado", undefined, undefined, 700, 450, 64, "cut", "cut");
const evilBanana = new Ingredient("Banana", undefined, undefined, 600, 430, 64, "cut", "cut");
const evilChiaSeeds = new Ingredient("Chia Seeds", undefined, undefined, 740, 500, 90, "plop", "scoop");
const evilCocoaPowder = new Ingredient("Cocoa Powder", undefined, undefined, 775, 350, 90, "plop", "scoop");
const evilCoconut = new Ingredient("Coconut Water", undefined, undefined, 450, 375, 64, "cut", "cut");
const evilFrozenBerries = new Ingredient("Frozen Berries", undefined, undefined, 670, 260, 125, "solidPour", "scoop");
const evilHoneyjar = new Ingredient("Honey", undefined, undefined, 510, 450, 90, "plop", "scoop");
const evilMango = new Ingredient("Mango Chunks", undefined, undefined, 500, 375, 64, "cut", "cut");
const evilMilk = new Ingredient("Milk", undefined, undefined, 450, 290, 85, "liquidPour", "pour");
const evilOrange = new Ingredient("Orange", undefined, undefined, 630, 400, 32, "cut", "cut");
const evilOrangeJuice = new Ingredient("Orange Juice", undefined, undefined, 325, 300, 80, "liquidPour", "pour");
const evilPeanutButter = new Ingredient("Peanut Butter", undefined, undefined, 550, 400, 64, "plop", "scoop");
const evilPineapple = new Ingredient("Pineapple Chunks", undefined, undefined, 720, 375, 125, "cut", "cut");
const evilSpinach = new Ingredient("Spinach Leaves", undefined, undefined, 635, 350, 64, "cut", "cut");
const evilStrawberry = new Ingredient("Strawberry", undefined, undefined, 635, 480, 32, "cut", "cut");
const evilWater = new Ingredient("Water", undefined, undefined, 400, 300, 80, "liquidPour", "pour");
const evilWatermelon = new Ingredient("Watermelon", undefined, undefined, 550, 300, 125, "cut", "cut");
const evilYogurt = new Ingredient("Yogurt", undefined, undefined, 750, 280, 64, "plop", "scoop");
const evilIngredients = [evilApple, evilAvocado, evilBanana, evilChiaSeeds, evilCocoaPowder, evilCoconut, evilFrozenBerries, evilHoneyjar, evilMango, evilMilk, evilOrange, evilOrangeJuice, evilPeanutButter, evilPineapple, evilSpinach, evilStrawberry, evilWater, evilWatermelon]


/**
 * Function to switch picture of the character
 */
function displayVee() {
    if (veeMood === 'neutral') {
        vee.image = veeImg;
        vee.height = 600
        vee.width = 200
    }
    if (veeMood === 'angry') {
        vee.image = veeAngry;
    } else if (veeMood === 'crazy') {
        vee.image = veeCrazy;
        vee.height = 1000
        vee.width = width



    } else if (veeMood === 'happy') {
        vee.image = veeHappy;
    } else if (veeMood === 'sad') {
        vee.image = veeSad;
    }

    // // console.log(vee);
    vee.display();



    // veeTextArea.display('salmon', '#000');
}

function listenToVee() {
    evilIngredients.forEach((element, index) => {


        if (checkOverlap(mouseX, mouseY, element.x, element.y, element.size)) {
            veeMood = 'sad';

            // Remove the element from the array
            evilIngredients.splice(index, 1);
        }
    });


}

function displayItems() {
    evilIngredients.forEach((element, index) => {
        console.log(element)
        element.display()
    });
}

function moveVee() {
    if (evilIngredients.length == 0) {
        veeMood = 'angry';

        vee.x = constrain(vee.x, vee.x + 0.5, 10)
    }

}