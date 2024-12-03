/*
 * SmoooVees 
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
let activeSmoothie; // current smoothie the player has to make
let activeFoodElement; //current food selected
let originalFoodData = { x: 0, y: 0, image: undefined }
let gameInProgress = false;
let randomizedValue;
let foodAction = null;
let numOfChops = 0; // max amount of time the player can chop 
let numOfPours = 0;
let chosenFoods = []
let ingredientsCount = 0
let smoothies;
let incorrectIngredientsCount = 0


const gameBlender = {
    name: "Blender",
    image: undefined,
    x: 150,
    y: 400,
    size: 300,
    action: "blend"
}

const apple = new Ingredient("Green Apple", undefined, undefined, 670, 450, 32, "cut", "cut");
const avocado = new Ingredient("Avocado", undefined, undefined, 700, 450, 64, "cut", "cut");
const banana = new Ingredient("Banana", undefined, undefined, 600, 430, 64, "cut", "cut");
const chiaSeeds = new Ingredient("Chia Seeds", undefined, undefined, 740, 500, 90, "plop", "scoop");
const cocoaPowder = new Ingredient("Cocoa Powder", undefined, undefined, 775, 350, 90, "plop", "scoop");
const coconut = new Ingredient("Coconut Water", undefined, undefined, 450, 375, 64, "cut", "cut");
const frozenBerries = new Ingredient("Frozen Berries", undefined, undefined, 670, 260, 125, "solidPour", "scoop");
const honeyjar = new Ingredient("Honey", undefined, undefined, 510, 450, 90, "plop", "scoop");
const mango = new Ingredient("Mango Chunks", undefined, undefined, 500, 375, 64, "cut", "cut");
const milk = new Ingredient("Milk", undefined, undefined, 450, 290, 85, "liquidPour", "pour");
const orange = new Ingredient("Orange", undefined, undefined, 630, 400, 32, "cut", "cut");
const orangeJuice = new Ingredient("Orange Juice", undefined, undefined, 325, 300, 80, "liquidPour", "pour");
const peanutButter = new Ingredient("Peanut Butter", undefined, undefined, 550, 400, 64, "plop", "scoop");
const pineapple = new Ingredient("Pineapple Chunks", undefined, undefined, 720, 375, 125, "cut", "cut");
const spinach = new Ingredient("Spinach Leaves", undefined, undefined, 635, 350, 64, "cut", "cut");
const strawberry = new Ingredient("Strawberry", undefined, undefined, 635, 480, 32, "cut", "cut");
const water = new Ingredient("Water", undefined, undefined, 400, 300, 80, "liquidPour", "pour");
const watermelon = new Ingredient("Watermelon", undefined, undefined, 550, 300, 125, "cut", "cut");
const yogurt = new Ingredient("Yogurt", undefined, undefined, 750, 280, 64, "plop", "scoop");
const ingredients = [yogurt, apple, avocado, banana, chiaSeeds, cocoaPowder, coconut, frozenBerries, honeyjar, mango, milk, orange, orangeJuice, peanutButter, pineapple, spinach, strawberry, water, watermelon];


function drawInGameCounter() {
    push();
    stroke('#c0c0c0');
    strokeWeight(2)
    fill('#fffff2');
    rect(0, 300, width, height / 1.5);
    pop();

}

let cuttingBoardImg = undefined

/**
 * Displays the pixelated foods on the counter top and centers them within their bounding box 
 */
function drawCounterItems() {
    image(cuttingBoardImg, 530, 520, 230, 180);
    if (foodAction != 'blend') {
        image(gameBlender.image, gameBlender.x - gameBlender.size / 2, gameBlender.y - gameBlender.size / 2, gameBlender.size, gameBlender.size)
    }

    // loop through ingredients array to display the ingredient images
    ingredients.forEach(foodObj => {
        foodObj.display()
    });

}




/**
 * Draws the order section at the top left of the screen
 */
function drawOrder(inputText, smoothieArr) {
    let yStartPos = 105; // default y position
    let yIncrement = 20; // space between each line
    activeSmoothie = randomizeElement(smoothieArr) // selects random drink object from the smoothies array

    let textArea = new TextArea(10, 10, 300, 185, 20)
    textArea.addText(`${inputText}\n`, 150, 50, 30, '#8e7cc3')
    textArea.addText(`${inputText}\n`, 153, 52, 30, '#b4a7d6')
    textArea.addText(`${activeSmoothie.name}\n`, 160, 80, 25, activeSmoothie.color)

    textArea.display('#c0c0c0')

    push();

    activeSmoothie.ingredients.forEach((element, index) => { // displays all the ingredients for the randomized drink
        textSize(20);

        if (chosenFoods.includes(element)) {
            fill('lightgreen')
            stroke('black')
            textArea.addText(`${index + 1}. ${element}`, 80, yStartPos + index * yIncrement, 25, activeSmoothie.color)

            text(`${index + 1}. ${element}`, 80, yStartPos + index * yIncrement);
        } else {
            fill('white')
            stroke('black')
            text(`${index + 1}. ${element}`, 80, yStartPos + index * yIncrement);

        }

    });
    pop()
}

function drawIncorrectIngredientCount() {
    let textArea = new TextArea(500, 10, 275, 75, 20)
    textArea.addText(`Incorrect Ingredients`, 640, 40, 25, 'black');
    textArea.addText(`${incorrectIngredientsCount}`, 640, 70, 25, 'black');
    textArea.display('#c0c0c0')
}


function drawMovesLeft() {
    let textArea = new TextArea(500, 100, 275, 75, 20)
    textArea.addText(`Moves Left\n${activeSmoothie.ingredients.length - ingredientsCount}`, 640, 130, 25, '#c27ba0');
    textArea.display('#c0c0c0')
}

/**
 * Creates the action button (either cut or pour) for the food element
 */
function foodActionBtn(action) {

    if (!foodBtn) {
        foodBtn = createButton(action.toUpperCase());
        foodBtn.parent("canvasDiv")
        foodBtn.position(width / 2, 650);
        foodBtn.addClass('food-action-btn'); //for styling purposes
    }
    foodBtn.mousePressed(() => {
        foodAction = activeFoodElement.action

        playActionSound()

        backBtn.hide();


    });

}

function drawBackBtn() {
    if (!backBtn) {
        backBtn = createButton('Go Back');
        backBtn.parent("canvasDiv")
        backBtn.position(0, 50);
        backBtn.addClass('btn'); //for styling purposes
    }
    backBtn.mousePressed(() => {
        foodAction = null

        playActionSound()

        backBtn.hide();
        foodBtn.hide();
    });

}

/**
 * Play specific sound bite
 */
function playActionSound() {
    if (foodAction == 'cut') {
        numOfChops++
        knifeSound.play();
        if (numOfChops == 2) {
            activeFoodElement.image = activeFoodElement.openImage;
            numOfChops = 0;
            foodAction = 'putInBlender';
            foodBtn.elt.remove();
            foodBtn = null;
        };
    } else if (foodAction === 'plop' || foodAction === 'liquidPour' || foodAction === 'solidPour') {

        if (foodAction === 'plop') plopSound.play();
        if (foodAction === 'liquidPour') liquidPourSound.play();
        if (foodAction === 'solidPour') solidPourSound.play();
        numOfPours++

        if (numOfPours == 2) {
            activeFoodElement.image = activeFoodElement.openImage;
            numOfPours = 0;
            foodAction = 'putInBlender';
            foodBtn.elt.remove();
            foodBtn = null;

        };
    }

}
let smoothie = new Smoothie(
    400, 530, 180, 100, // Lid properties
    310, 530, 180, 200, // Cup properties
    390, 400, 20, 330, // Straw properties
    '#ebe6d9' // Cup color
);
/**
 * Draws the smoothie's cup 
 */
function drawSmoothieCup() {
    if (!smoothie) {
        console.error('Smoothie object is not initialized.');
        return;
    }

    smoothie.display();


}


function resetGameSettings() {
    gameInProgress = false;
    foodAction = null;
    numOfChops = 0; // max amount of time the player can chop 
    numOfPours = 0;
    chosenFoods = [];
    ingredientsCount = 0
    incorrectIngredientsCount = 0

    smoothie = new Smoothie(
        400, 530, 180, 100, // Lid properties
        310, 530, 180, 200, // Cup properties
        390, 400, 20, 330, // Straw properties
        '#ebe6d9' // Cup color
    );
    // smooVeesLayout();


}

function showPreviewScreenButtons() {
    backBtn.show();
    foodBtn.show();

}


/**
 * Shows the selected food element up close and makes sure the user actually want to select it
 */
function previewFoodSelection() {

    if (foodAction == 'preview') {

        clear();
        push();
        background('#fffff2'); //counter top
        pop();
        push()



        textSize(40)
        textAlign(CENTER)
        image(activeFoodElement.image, 200, 120, 500, 500);
        text('You chose the ' + activeFoodElement.name + '\nclick the button to ' + activeFoodElement.actionBtnLbl + ' it!', width / 2, 50);


        foodActionBtn(activeFoodElement.actionBtnLbl) // creates a button with the name of the action
        drawBackBtn()
        showPreviewScreenButtons()
        pop()


    } else if (foodAction === 'cut' || foodAction === 'solidPour' || foodAction === 'liquidPour' || foodAction === 'plop') {
        actionFoodSelection();

    } else if (foodAction === 'putInBlender') {
        switchMouseToFood(); // adds the chopped or poured ingredient to the mouse positions


    } else if (foodAction == 'serve') {
        gameBlender.x = 150; // reset the x and y pos of the blender
        gameBlender.y = 400


    } else if (foodAction === 'blend') {

        blendIngredients()

    }


}

/**
 * Function to handle the blending functionality
 */
function clickToBlend() {
    if (foodAction == 'putInBlender' && checkOverlap(mouseX, mouseY, gameBlender.x, gameBlender.y, gameBlender.size)) {
        putSound.play()

        // check if the ingredient is not in the recipe, increment the incorrect ingredient count
        if (!activeSmoothie.ingredients.includes(activeFoodElement.name)) {
            incorrectIngredientsCount++
        }

        // check if the ingredient has not already been selected
        if (!chosenFoods.includes(activeFoodElement.name)) {
            chosenFoods.push(activeFoodElement.name); // add it to the chosen fruit array

        }


        activeFoodElement.x = originalFoodData.x;
        activeFoodElement.y = originalFoodData.y;
        activeFoodElement.image = originalFoodData.image
        ingredientsCount++
        console.log(originalFoodData)

        mouseX = 0;
        mouseY = 0;
        foodAction = null
        if (ingredientsCount == activeSmoothie.ingredients.length) {
            blenderSound.play()

            foodAction = 'blend'
        }



    }
}


function pourSmoothie() {
    const lidRadius = Math.min(smoothie.lid.size.x, smoothie.lid.size.y) / 2;

    if (checkOverlap(mouseX, mouseY, smoothie.lid.x, smoothie.lid.y, lidRadius * 2)) {

        foodAction = 'serve';
        serveDrink(); // changes colour of the cup and plays sound
    }
}

/**
 * Function to handle the 'cut' action scenery 
 */
function drawCuttingScreen() {

    background('#BA8963');
    push()
    noStroke()
    rect(20, 280, 70, 300, 20);
    image(activeFoodElement.image, 200, 100, 500, 500);

    fill('#fffff2')

    rect(width - 100, 0, 100, height);
    pop()
}
/**
 * Function to handle the 'pour' action scenery 
 */
function drawPouringScreen() {
    background('#fffff2');
    push()
    fill('#b4a7d6')
    noStroke();
    rect(0, 0, width, 100, 20);
    pop()
    image(activeFoodElement.image, 200, 100, 500, 500);
}

function actionFoodSelection() {
    if (foodAction === 'cut') {
        drawCuttingScreen();
    } else if (foodAction === 'solidPour' || foodAction === 'liquidPour' || foodAction === 'plop') {
        drawPouringScreen();
    }

}

/**
 * Adds the modified food element to the mouse 
 */
function switchMouseToFood() {
    activeFoodElement.x = mouseX;
    activeFoodElement.y = mouseY;
    console.log(activeFoodElement.y)
}


/**
 * Interaction that allows the user to select one the food elements on the counter top
 */
function selectFood() {
    ingredients.forEach((element) => {
        if (checkOverlap(mouseX, mouseY, element.x, element.y, element.size) && foodAction == null && ingredientsCount < activeSmoothie.ingredients.length) {
            activeFoodElement = element; // assigns the selected food to the activeFoodElement variable
            originalFoodData.x = activeFoodElement.x;
            originalFoodData.y = activeFoodElement.y;
            originalFoodData.image = activeFoodElement.image

            // check if the ingredient has not already been selected
            if (!chosenFoods.includes(activeFoodElement.name)) {

                foodAction = 'preview'; // Focused screen for the selected food
            }


        }
    })

}



function blendIngredients() {
    if (foodAction == 'blend') {
        push();
        // Move to the blender's current position
        translate(gameBlender.x, gameBlender.y);


        rotate(PI / 180 * -45); // Rotate blender by -45 degrees

        // Draw the rotated blender at the current position
        imageMode(CENTER);
        image(gameBlender.image, 0, 0, gameBlender.size, gameBlender.size);

        pop();

        // Update the blender's position to follow the mouse
        gameBlender.x = mouseX;
        gameBlender.y = mouseY;
        pourSmoothie()

    }



}



/**
 * Changes the drink colour
 */
function serveDrink() {
    let equalArray = (chosenFoods.length === activeSmoothie.ingredients.length) && (chosenFoods.every(val => activeSmoothie.ingredients.includes(val)));

    console.log(foodAction)

    if (equalArray && ingredientsCount == activeSmoothie.ingredients.length) {


        smoothie.changeColor(activeSmoothie.color)
            //  smoothie.display()

        cashRegisterSound.play()

    } else if (!equalArray && ingredientsCount == activeSmoothie.ingredients.length) {
        cupFalling.play()
        console.log(smoothie)
            // simulate a spilled over cup 
        smoothie.cup.x = 100
        smoothie.cup.y = 575 //base of smoothie cup
        smoothie.cup.size.x = 300
        smoothie.cup.size.y = 200

        smoothie.lid.x = 100
        smoothie.lid.y = 675 //lid of smoothie cup
        smoothie.lid.size.x = 100
        smoothie.lid.size.y = 200

        smoothie.straw.x = 0
        smoothie.straw.y = 750 //straw of smoothie cup
        smoothie.straw.size.x = 400
        smoothie.straw.size.y = 25
        smoothie.color = '#ebe6d9'
        sadTromboneSound.play()


    }

}