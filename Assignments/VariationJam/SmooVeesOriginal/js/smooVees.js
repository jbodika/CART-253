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

// All images 
const appleImg = {
    name: "Green Apple",
    image: undefined,
    openImage: undefined,
    x: 670,
    y: 450,
    originalY: 450,
    size: 32,
    action: "cut",
    actionBtnLbl: "cut"
}

const avocadoImg = {
    name: "Avocado",
    image: undefined,
    openImage: undefined,
    x: 700,
    y: 450,
    originalY: 450,
    size: 64,
    action: "cut",
    actionBtnLbl: "cut"
}
const bananaImg = {
    name: "Banana",
    image: undefined,
    openImage: undefined,
    x: 600,
    y: 430,
    originalY: 430,
    size: 64,
    action: "cut",
    actionBtnLbl: "cut"
};

const chiaSeedsImg = {
    name: "Chia Seeds",
    image: undefined,
    x: 740,
    y: 500,
    originalY: 500,
    size: 90,
    action: "plop",
    actionBtnLbl: "scoop"
}

const cocoaPowderImg = {
    name: "Cocoa Powder",
    image: undefined,
    x: 775,
    y: 350,
    originalY: 350,
    size: 90,
    action: "plop",
    actionBtnLbl: "scoop"
}

const coconutImg = {
    name: "Coconut Water",
    image: undefined,
    openImage: undefined,
    x: 450,
    y: 375,
    originalY: 375,
    size: 64,
    action: "cut",
    actionBtnLbl: "cut"
}

const frozenBerriesImg = {
    name: "Frozen Berries",
    image: undefined,
    x: 670,
    y: 260,
    size: 125,
    action: "solidPour",
    actionBtnLbl: "scoop"
}




const honeyjarImg = {
    name: "Honey",
    image: undefined,
    openImage: undefined,
    x: 510,
    y: 450,
    size: 90,
    action: "plop",
    actionBtnLbl: "scoop"
};
const mangoImg = {
    name: "Mango Chunks",
    image: undefined,
    openImage: undefined,
    x: 500,
    y: 375,
    size: 64,
    action: "cut",
    actionBtnLbl: "cut"
};

const milkImg = {
    name: "Milk",
    image: undefined,
    openImage: undefined,
    x: 450,
    y: 290,
    size: 85,
    action: "liquidPour",
    actionBtnLbl: "pour"
};

const orangeImg = {
    name: "Orange",
    image: undefined,
    openImage: undefined,
    x: 630,
    y: 400,
    size: 32,
    action: "cut",
    actionBtnLbl: "cut"

};

const orangeJuiceImg = {
    name: "Orange Juice",
    image: undefined,
    openImage: undefined,
    x: 325,
    y: 300,
    size: 80,
    action: "liquidPour",
    actionBtnLbl: "pour"

};
const peanutButterImg = {
    name: "Peanut Butter",
    image: undefined,
    openImage: undefined,
    x: 550,
    y: 400,
    size: 64,
    action: "plop",
    actionBtnLbl: "scoop"
}


const pineappleImg = {
    name: "Pineapple Chunks",
    image: undefined,
    openImage: undefined,
    x: 720,
    y: 375,
    size: 125,
    action: "cut",
    actionBtnLbl: "cut"
}


const spinachImg = {
    name: "Spinach Leaves",
    image: undefined,
    openImage: undefined,
    x: 635,
    y: 350,
    size: 64,
    action: "cut",
    actionBtnLbl: "cut"
}

const strawberryImg = {
    name: "Strawberry",
    image: undefined,
    openImage: undefined,
    x: 635,
    y: 480,
    size: 32,
    action: "cut",
    actionBtnLbl: "cut"
}

const waterImg = {
    name: "Water",
    image: undefined,
    openImage: undefined,
    x: 400,
    y: 300,
    size: 80,
    actionBtnLbl: "pour",
    action: "liquidPour"
}

const watermelonImg = {
    name: "Watermelon",
    image: undefined,
    openImage: undefined,
    x: 550,
    y: 300,
    size: 125,
    action: 'cut',
    actionBtnLbl: "cut",
    colour: '#FD4659'
};



const yogurtImg = {
    name: "Yogurt",
    image: undefined,
    x: 750,
    y: 280,
    size: 64,
    action: "plop",
    actionBtnLbl: "scoop"
};







const gameBlender = {
    name: "Blender",
    image: undefined,
    x: 150,
    y: 400,
    size: 300,
    action: "blend"
}

let smoothieCup = {

    lid: {
        x: 400,
        y: 530,
        size: {
            x: 180,
            y: 100
        }
    },
    cup: {
        x: 310,
        y: 530,
        size: {
            x: 180,
            y: 200,
        }
    },
    straw: {
        x: 390,
        y: 370,
        size: {
            x: 20,
            y: 330
        }
    },
    color: '#ebe6d9'
}


let foods = [appleImg, avocadoImg, bananaImg, chiaSeedsImg, cocoaPowderImg, coconutImg, frozenBerriesImg, honeyjarImg, mangoImg, milkImg, orangeImg, orangeJuiceImg, peanutButterImg, pineappleImg, spinachImg, strawberryImg, waterImg, watermelonImg, yogurtImg]


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


    foods.forEach(foodObj => {
        image(foodObj.image, foodObj.x - foodObj.size / 2, foodObj.y - foodObj.size / 2, foodObj.size, foodObj.size);

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
    textArea.addText(`Moves Left\n${activeSmoothie.ingredients.length- ingredientsCount}`, 640, 130, 25, '#c27ba0');
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

/**
 * Draws the smoothie's cup 
 */
function drawSmoothieCup() {
    push();
    stroke('#c0c0c0')
    strokeWeight(3) // the lid of the cup
    fill('#ebe6d9');
    ellipse(smoothieCup.lid.x, smoothieCup.lid.y, smoothieCup.lid.size.x, smoothieCup.lid.size.y)

    pop();

    push()
    fill(smoothieCup.color);
    stroke('#c0c0c0')
    strokeWeight(3)
    rect(smoothieCup.cup.x, smoothieCup.cup.y, smoothieCup.cup.size.x, smoothieCup.cup.size.y)
    pop()

    push()
    strokeWeight(0.1)
    rect(smoothieCup.straw.x, smoothieCup.straw.y, smoothieCup.straw.size.x, smoothieCup.straw.size.y)
    pop()
}


function resetGameSettings() {
    gameInProgress = false;
    foodAction = null;
    numOfChops = 0; // max amount of time the player can chop 
    numOfPours = 0;
    originalFoodData = { x: 0, y: 0, image: undefined }
    chosenFoods = [];
    ingredientsCount = 0
    incorrectIngredientsCount = 0

    smoothieCup = {

            lid: {
                x: 400,
                y: 530,
                size: {
                    x: 180,
                    y: 100
                }
            },
            cup: {
                x: 310,
                y: 530,
                size: {
                    x: 180,
                    y: 200,
                }
            },
            straw: {
                x: 390,
                y: 370,
                size: {
                    x: 20,
                    y: 330
                }
            },
            color: '#ebe6d9'
        }
        // smooVeesLayout();


}



/**
 * Shows the selected food element up close and makes sure the user actually want to select it
 */
function previewFoodSelection() {
    // console.log(foodAction)
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
        if (activeSmoothie.ingredients.includes(activeFoodElement.name)) {
            chosenFoods.push(activeFoodElement.name)
        } else {
            incorrectIngredientsCount++;
        }

        activeFoodElement.x = originalFoodData.x;
        activeFoodElement.y = originalFoodData.y;
        activeFoodElement.image = originalFoodData.image
        ingredientsCount++
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
    const lidRadius = Math.min(smoothieCup.lid.size.x, smoothieCup.lid.size.y) / 2;

    if (checkOverlap(mouseX, mouseY, smoothieCup.lid.x, smoothieCup.lid.y, lidRadius * 2)) {

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
    foods.forEach((element) => {
        if (checkOverlap(mouseX, mouseY, element.x, element.y, element.size) && foodAction == null && ingredientsCount < activeSmoothie.ingredients.length) {
            activeFoodElement = element; // assigns the selected food to the activeFoodElement variable
            originalFoodData.x = activeFoodElement.x;
            originalFoodData.y = activeFoodElement.y;
            originalFoodData.image = activeFoodElement.image
            foodAction = 'preview'; // focused screen for the selected food 
            console.log(activeFoodElement)
            console.log(foodAction)


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



    if (equalArray && ingredientsCount == activeSmoothie.ingredients.length) {

        smoothieCup.color = activeSmoothie.color

        cashRegisterSound.play()

    } else if (!equalArray && ingredientsCount == activeSmoothie.ingredients.length) {
        cupFalling.play()

        // simulate a spilled over cup 
        smoothieCup.cup.x = 100
        smoothieCup.cup.y = 575 //base of smoothie cup
        smoothieCup.cup.size.x = 300
        smoothieCup.cup.size.y = 200

        smoothieCup.lid.x = 100
        smoothieCup.lid.y = 675 //lid of smoothie cup
        smoothieCup.lid.size.x = 100
        smoothieCup.lid.size.y = 200

        smoothieCup.straw.x = 0
        smoothieCup.straw.y = 750 //straw of smoothie cup
        smoothieCup.straw.size.x = 400
        smoothieCup.straw.size.y = 25
        smoothieCup.color = '#ebe6d9'
        sadTromboneSound.play()


    }

}