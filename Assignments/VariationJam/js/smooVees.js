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
let activeFoodElement; //curernt food selected
let gameInProgress = false;
let randomizedValue;
let foodAction = null;

// All images 
let watermelonImg = {
    name: "watermelon",
    image: undefined,
    x: 630,
    y: 280,
    size: 125
};

let frozenBerriesImg = {
    name: "berries",
    image: undefined,
    x: 670,
    y: 200,
    size: 125
}

let cuttingBoardImg = {
    name: "board",
    image: undefined,
    x: 500,
    y: 500,
    size: 200
};

let bananaImg = {
    name: "banana",
    image: undefined,
    x: 520,
    y: 300,
    size: 64

};

let orangeImg = {
    name: "orange",
    image: undefined,
    x: 630,
    y: 400,
    size: 32

};
let honeyjarImg = {
    name: "honey",
    image: undefined,
    x: 700,
    y: 320,
    size: 64
};

let milkImg = {
    name: "milk",
    image: undefined,
    x: 500,
    y: 250,
    size: 85
};


let yogurtImg = {
    name: "yogurt",
    image: undefined,
    x: 600,
    y: 400,
    size: 20
};

let smoothies;
let foods = [orangeImg, yogurtImg, honeyjarImg, watermelonImg, bananaImg, frozenBerriesImg, milkImg]

/**
 * Draws the menu circles
 */
function drawMenu() {
    // background button
    push();
    stroke('#c0c0c0');
    strokeWeight(5);
    rect(55, height - 70, 125, 40, 20);
    pop();

    // text on the button
    push();
    textFont(bagelFatOneFont);
    textSize(20);
    text('Main Menu', 70, height - 43);
    pop();
}


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
    //  image(blenderImg.image, blenderImg.x, blenderImg.y,blenderImg.size)
    image(cuttingBoardImg.image, cuttingBoardImg.x - cuttingBoardImg.size / 2, cuttingBoardImg.y - cuttingBoardImg.size / 2, cuttingBoardImg.size, cuttingBoardImg.size);

    image(frozenBerriesImg.image, frozenBerriesImg.x - frozenBerriesImg.size / 2, frozenBerriesImg.y - frozenBerriesImg.size / 2, frozenBerriesImg.size, frozenBerriesImg.size);
    image(milkImg.image, milkImg.x - milkImg.size / 2, milkImg.y - milkImg.size / 2, milkImg.size, milkImg.size);
    image(honeyjarImg.image, honeyjarImg.x - honeyjarImg.size / 2, honeyjarImg.y - honeyjarImg.size / 2, honeyjarImg.size, honeyjarImg.size);
    image(watermelonImg.image, watermelonImg.x - watermelonImg.size / 2, watermelonImg.y - watermelonImg.size / 2, watermelonImg.size, watermelonImg.size);
    image(orangeImg.image, orangeImg.x - orangeImg.size / 2, orangeImg.y - orangeImg.size / 2, orangeImg.size, orangeImg.size);
    image(bananaImg.image, bananaImg.x - bananaImg.size / 2, bananaImg.y - bananaImg.size / 2, bananaImg.size, bananaImg.size);
    image(yogurtImg.image, yogurtImg.x - yogurtImg.size / 2, yogurtImg.y - yogurtImg.size / 2, yogurtImg.size, yogurtImg.size);
}

function drawOrder() {
    let yStartPos = 150; // default y position
    let yIncrement = 20; // space between each line
    activeSmoothie = randomizeElement(smoothies.drinks)
    push();
    stroke('white');
    strokeWeight(2);
    fill('#c0c0c0');
    rect(50, 50, 300, 185, 20);
    pop();

    push();
    textFont(bagelFatOneFont);
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
    activeSmoothie.ingredients.forEach((element, index) => {
        textFont(bagelFatOneFont);
        textSize(20);
        fill('white')
        stroke('black')
        text(`${index + 1}. ${element}`, 100, yStartPos + index * yIncrement);
    });
    pop()
}


function drawSmoothieCup() {
    push();
    stroke('#c0c0c0')
    strokeWeight(3) // the lid of the cup
    fill('#ebe6d9');
    ellipse(225, 490, 180, 100)

    pop();
    push()
    beginShape();
    fill('#ebe6d9');
    stroke('#c0c0c0')
    strokeWeight(3)

    vertex(150, 700); // Bottom left
    vertex(300, 700); // Bottom right
    vertex(315, 500); // Top right
    vertex(135, 500); // Top left

    endShape(CLOSE);
    pop()

    push()
    strokeWeight(0.1)
    rect(220, 370, 20, 330)
    pop()
}
/**
 * Shows the selected food element up close and makes sure the user actually want to select it
 */
function previewFoodSelection() {
    if (foodAction == 'preview') {
        clear();
        push();
        background('#fffff2'); //cutting board
        pop();

        image(activeFoodElement.image, 200, 100, 500, 500);

        textFont(bagelFatOneFont);
        text('You chose the ' + activeFoodElement.name, width / 2, 700);

    }

}
/**
 * Interaction that allows the user to select one the food elements on the counter top
 */
function selectFood() {
    foods.forEach((element) => {
        if (checkOverlap(mouseX, mouseY, element.x, element.y, element.size) && foodAction == null) {
            activeFoodElement = element; // assigns the selected food to the activeFoodElement variable
            foodAction = 'preview'; // focused screen for the selected food 
        }
    })

}