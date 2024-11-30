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

// All images 
let watermelonImg = {
    name: "Watermelon",
    image: undefined,
    openImage: undefined,
    x: 630, //630 - 280
    y: 280,
    size: 125,
    action: "cut",
    colour: '#FD4659'
};

let frozenBerriesImg = {
    name: "Frozen Berries",
    image: undefined,
    x: 670,
    y: 200,
    size: 125,
    action: "pour"
}

let cuttingBoardImg = {
    name: "Board",
    image: undefined,
    x: 650,
    y: 550,
    size: 200
};

let bananaImg = {
    name: "Banana",
    image: undefined,
    openImage: undefined,
    x: 520,
    y: 300,
    size: 64,
    action: "cut"

};

let orangeImg = {
    name: "Orange",
    image: undefined,
    x: 630,
    y: 400,
    size: 32,
    action: "cut"

};
let honeyjarImg = {
    name: "Honey",
    image: undefined,
    x: 700,
    y: 320,
    size: 64,
    action: "pour"
};

let milkImg = {
    name: "Milk",
    image: undefined,
    x: 500,
    y: 250,
    size: 85,
    action: "pour"
};


let yogurtImg = {
    name: "Yogurt",
    image: undefined,
    x: 600,
    y: 400,
    size: 20,
    action: "pour"
};

let gameBlender = {
    name: "Blender",
    image: orangeImg.image,
    x: 150,
    y: 400,
    size: 300,
    action: "blend"
}



let foods = [orangeImg, yogurtImg, honeyjarImg, watermelonImg, bananaImg, frozenBerriesImg, milkImg]




function drawInGameCounter() {
    push();
    stroke('#c0c0c0');
    strokeWeight(2)
    fill('#fffff2');
    rect(0, 300, width, height / 1.5);
    pop();

}

/**
 * Displays the pixelated foods on the counter top and centers them within their bounding box 
 */
function drawCounterItems() {
    image(cuttingBoardImg.image, cuttingBoardImg.x - cuttingBoardImg.size / 2, cuttingBoardImg.y - cuttingBoardImg.size / 2, cuttingBoardImg.size, cuttingBoardImg.size);
    image(frozenBerriesImg.image, frozenBerriesImg.x - frozenBerriesImg.size / 2, frozenBerriesImg.y - frozenBerriesImg.size / 2, frozenBerriesImg.size, frozenBerriesImg.size);
    image(milkImg.image, milkImg.x - milkImg.size / 2, milkImg.y - milkImg.size / 2, milkImg.size, milkImg.size);
    image(honeyjarImg.image, honeyjarImg.x - honeyjarImg.size / 2, honeyjarImg.y - honeyjarImg.size / 2, honeyjarImg.size, honeyjarImg.size);
    image(watermelonImg.image, watermelonImg.x - watermelonImg.size / 2, watermelonImg.y - watermelonImg.size / 2, watermelonImg.size, watermelonImg.size);
    image(orangeImg.image, orangeImg.x - orangeImg.size / 2, orangeImg.y - orangeImg.size / 2, orangeImg.size, orangeImg.size);
    image(bananaImg.image, bananaImg.x - bananaImg.size / 2, bananaImg.y - bananaImg.size / 2, bananaImg.size, bananaImg.size);
    image(yogurtImg.image, yogurtImg.x - yogurtImg.size / 2, yogurtImg.y - yogurtImg.size / 2, yogurtImg.size, yogurtImg.size);

    image(blenderImg, gameBlender.x - gameBlender.size / 2, gameBlender.y - gameBlender.size / 2, gameBlender.size, gameBlender.size)


}




/**
 * Draws the order section at the top left of the screen
 */
function drawOrder() {
    let yStartPos = 150; // default y position
    let yIncrement = 20; // space between each line
    activeSmoothie = randomizeElement(smoothies.drinks) // selects random drink object from the smoothies array
    push();
    stroke('white');
    strokeWeight(2);
    fill('#c0c0c0');
    rect(50, 50, 300, 185, 20);
    pop();

    push();
    textSize(30);
    stroke('white');

    textAlign(CENTER);
    fill('#8e7cc3')
    text(`SmooVee\n`, 200, 90);

    stroke('white');
    fill('#b4a7d6')
    strokeWeight(2);
    text(`SmooVee\n`, 203, 92);
    stroke('white');

    textSize(25);

    fill(`${activeSmoothie.color}`);
    text(`${activeSmoothie.name}`, 200, 120);
    pop();

    push();
    activeSmoothie.ingredients.sort().forEach((element, index) => { // displays all the ingredients for the randomized drink
        textSize(20);
        fill('white')
        stroke('black')
        text(`${index + 1}. ${element}`, 100, yStartPos + index * yIncrement);
    });
    pop()
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
        if (numOfChops == 4) {
            activeFoodElement.image = activeFoodElement.openImage;
            foodAction = null;
            numOfChops = 0;
            foodAction = 'blend';
            foodBtn.elt.remove();
            foodBtn = null;
        };
    } else if (foodAction == 'pour') {
        numOfPours++
        pouringSound.play();
        if (numOfPours == 2) {
            activeFoodElement.image = activeFoodElement.openImage;
            foodAction = 'blend';
            numOfPours = 0;
            foodBtn.elt.remove();
            foodBtn = null;

        };
    }
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
            y: 200
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
                    y: 200
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

    if (foodAction == 'preview') {
        clear();
        push();
        background('#fffff2'); //counter top
        pop();

        image(activeFoodElement.image, 200, 100, 500, 500);

        push()
        textSize(40)
        textAlign(CENTER)
        text('You chose the ' + activeFoodElement.name + '\n' + activeFoodElement.action + ' it!', width / 2, 100);
        pop()

        foodActionBtn(activeFoodElement.action)

    } else if (foodAction === 'cut' || foodAction === 'pour' && !match) {
        actionFoodSelection();
    } else if (foodAction === 'blend') {

        switchMouseToFood();

        //  console.log('blendddd')
    } else if (foodAction == 'serve') {
        console.log('okk')
        serveDrink()
    }


}

/**
 * Function to handle the blending functionality
 */
function clickToBlend() {
    if (foodAction == 'blend' && checkOverlap(mouseX, mouseY, gameBlender.x, gameBlender.y, gameBlender.size)) {
        blenderSound.play()

        chosenFoods.push(activeFoodElement.name)
        activeFoodElement.x = originalFoodData.x;
        activeFoodElement.y = originalFoodData.y;
        activeFoodElement.image = originalFoodData.image
        ingredientsCount++
        mouseX = 0;
        mouseY = 0;

        foodAction = null
    }
}


/**
 * Function to handle the 'cut' action scenery 
 */
function drawCuttingScreen() {

    background('#BA8963');
    rect(20, 280, 70, 300, 20);
    image(activeFoodElement.image, 200, 100, 500, 500);

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
    clear()
    if (foodAction === 'cut') {
        drawCuttingScreen();
    } else if (foodAction === 'pour') {
        drawPouringScreen();
    }

}

/**
 * Adds the modified food element to the mouse 
 */
function switchMouseToFood() {
    activeFoodElement.x = mouseX;
    activeFoodElement.y = mouseY;
}


/**
 * Interaction that allows the user to select one the food elements on the counter top
 */
function selectFood() {
    foods.forEach((element) => {
        if (checkOverlap(mouseX, mouseY, element.x, element.y, element.size) && foodAction == null && ingredientsCount < 4) {
            console.log(element)
            activeFoodElement = element; // assigns the selected food to the activeFoodElement variable
            originalFoodData.x = activeFoodElement.x;
            originalFoodData.y = activeFoodElement.y;
            originalFoodData.image = activeFoodElement.image
            foodAction = 'preview'; // focused screen for the selected food 

        }
    })

}

/**
 * Changes the drink colour
 */
function serveDrink() {
    let equalArray = (chosenFoods.length === activeSmoothie.ingredients.length) && (chosenFoods.every(val => activeSmoothie.ingredients.includes(val)));
    if (equalArray && ingredientsCount == 4) {

        smoothieCup.color = activeSmoothie.color

        cashRegisterSound.play()

    } else if (!equalArray && ingredientsCount == 4) {
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