/**
 * Frogfrogfrog Mod Jam
 * Jolene Bodika
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

//DECLARE CONSTANT VARIABLES
const snake = {
    body: {
        x: 90,
        y: 300,
        size: 100
    }
}

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};


// Has a position, size, and speed of horizontal movement
const houseFlies = {
    body: {
        x: 0,
        y: 200, // Will be random
        size: 10,
        colour: '#181C14',
    },
    speed: 5,
    pointVal: 1,
    minShake: -0.5,
    maxShake: 0.35
};


// Has a position, size, and speed of horizontal movement
const apples = {
    body: {
        x: 0,
        y: 200, // Will be random
        size: 10,
        colour: 'red',
    },
    speed: 8,
    pointVal: -3,
    minShake: 0,
    maxShake: 0
};

// Has a position, size, and speed of horizontal movement
const watermelon = {
    body: {
        x: 0,
        y: 200, // Will be random
        size: 20,
        colour: 'green',
    },
    speed: 12,
    pointVal: -7,
    minShake: 0,
    maxShake: 0
};

// Has a position, size, and speed of horizontal movement
const orange = {
    body: {
        x: 0,
        y: 200, // Will be random
        size: 15,
        colour: 'orange',
    },
    speed: 3,
    pointVal: -5,
    minShake: 0,
    maxShake: 0
};

// Has a position, size, and speed of horizontal movement
const craneFlies = {
    body: {
        x: 0,
        y: 200, // Will be random
        size: 7,
        colour: '#697565',
    },

    speed: 4,

    pointVal: 3,
    minShake: -0.10,
    maxShake: 0.40
};

// Has a position, size, and speed of horizontal movement
const fruitFlies = {
    body: {
        x: 0,
        y: 200, // Will be random
        size: 5,
        colour: '#3C3D37',
    },

    speed: 5,

    pointVal: 7,
    minShake: -0.50,
    maxShake: 0.80
};
//DECLARE GLOABAL VARIABLES
let frogSound;
let heartImg;
let blankHeartImg;
let fliesSkipped = 0
let score = 0
let fly;
let expansionFrames = 0
let yOffset = 0; // Variable to control the y-position of the image
let speed = 0.02; // Speed of the movement

//DECLARE FLAG VARIABLES
let expanding = false;

/**Function to load assets before the page is loaded*/
function preload() {
    frogSound = loadSound("assets/sounds/frogCroaking.wav");
    heartImg = loadImage("assets/images/pixel-heart-2779422_1280.png")
    blankHeartImg = loadImage("assets/images/blankHeart.png")

}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);
    // Suspending the audio to wait for user input
    getAudioContext().suspend();
    fly = randomizeFly() // assign the first random fly type to the fly variable
    randomItem = randomizeItem()
        // Give the fly its first random position
    resetFly();
}


function draw() {
    background("#87ceeb");
    if (gameInProgress()) {
        moveFly(fly);
        drawFly(fly);
        moveFrog();
        moveTongue();
        drawFrog();
        drawHearts();
        checkTongueFlyOverlap();
        drawScore();
        drawElement(randomItem)
        moveItems(randomItem)

        // Harder level with snake starts
        if (score > 50) {
            drawSnake();
            moveSnake();
        }


    }
    frogOverload();


}
/** Draws snake*/
function drawSnake() {
    // Draw snake body
    push();
    stroke("#7E825D");
    strokeWeight(snake.body.size);
    line(snake.body.x, 20, snake.body.x, snake.body.y);
    pop();

}

function moveSnake() {
    snake.body.y += 5 // makes the snake go down the y axis of the canvas
}

function frogOverload() {
    if (expanding && expansionFrames < 100) {
        frog.body.size += 100; // Increase the size of the frog
        textSize(20);
        textAlign(CENTER);
        text('Oh no! You ate too much...', width / 2, height / 2);
        expansionFrames++; // Increment the frames
    }


}
/*randomize the type of fly to appear*/
function randomizeFly() {
    let flyArray = [houseFlies, craneFlies, fruitFlies]
    return flyArray[Math.floor(Math.random() * flyArray.length)]
}


function drawScore() {
    push();
    textAlign(RIGHT, TOP);
    textStyle(BOLD);
    fill('white');
    text('Score: ' + score, width - 10, 10);
    pop();

    textSize(20);
}


function drawHearts() {
    //  Create the up-down movement with the sin() function
    yOffset = sin(frameCount * speed) * 5; // Adjust the amplitude by 5
    switch (fliesSkipped) {
        case 0:
            image(heartImg, width - 100, 30 + yOffset);
            image(heartImg, width - 70, 30 + yOffset);
            image(heartImg, width - 40, 30 + yOffset);
            break;
        case 1:
            image(heartImg, width - 100, 30 + yOffset);
            image(heartImg, width - 70, 30 + yOffset);
            image(blankHeartImg, width - 40, 30 + yOffset);
            break;
        case 2:
            image(heartImg, width - 100, 30 + yOffset);
            image(blankHeartImg, width - 70, 30 + yOffset);
            image(blankHeartImg, width - 40, 30 + yOffset);
            break;

        case 3:
            image(blankHeartImg, width - 100, 30 + yOffset);
            image(blankHeartImg, width - 70, 30 + yOffset);
            image(blankHeartImg, width - 40, 30 + yOffset);
            break;
    }

}


/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly(fly) {
    // Move the fly
    fly.body.x += fly.speed;

    // Add random shaking motion to both x and y values
    fly.body.x += random(fly.minShake, fly.maxShake); // Horizontal shake
    fly.body.y += random(fly.minShake, fly.maxShake); // Vertical shake 
    // Handle the fly going off the canvas
    if (fly.body.x > width) {
        // Select a random fly type
        fly = randomizeFly()
        resetFly(fly); // Reset the fly
        fliesSkipped++
    }
}



function gameInProgress() {

    if (fliesSkipped == 4) { //End game if 4 flies have been skipped
        textSize(20);
        textAlign(CENTER);

        text('Game over \n Your score is: ' + score, width / 2, height / 2);
        return false;
    }

    // If the score is over 100 the frog will expand
    if (score > 100 && !expanding) {
        expanding = true; // flag to expand the frog
    }

    // While the frog is expanding the game will keep running to show the animation
    if (expanding && expansionFrames < 100) {
        return true; //flag to expand the frog
    }

    // If expansionFrames reaches 100, the game ends
    if (expansionFrames >= 100) {
        textSize(20);
        textAlign(CENTER);
        text('Game over \n Your score is: ' + score, width / 2, height / 2);
        return false;
    }

    if (checkOverlap(snake.body.x, snake.body.y, frog.body.x, frog.body.y, frog.body.size)) {
        textSize(20);
        textAlign(CENTER);
        text('You got eaten by a snake :( \nYour score is: ' + score, width / 2, height / 2);
        return false;
    }

    return true;
}

/**
 * Draws the fly as a black circle
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(fly.body.colour);
    ellipse(fly.body.x, fly.body.y, fly.body.size);
    pop();
}

function drawElement(element) {
    push();
    noStroke();
    fill(element.body.colour);
    ellipse(element.body.x, element.body.y, element.body.size);
    pop();
}

let randomItem = randomizeItem()

function moveItems() {
    if (checkOverlap(randomItem.body.x, randomItem.body.y, frog.tongue.x, frog.tongue.y, frog.tongue.size)) {
        score += randomItem.pointVal
        fliesSkipped += 1
        randomItem = randomizeItem()
    }

    randomItem.body.x += randomItem.speed


}

function randomizeItem() {
    let foodArray = [apples, watermelon, orange]
    return foodArray[Math.floor(Math.random() * foodArray.length)]
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.body.x = 0;
    fly.body.y = random(70, 300); // random position on y axis for the fly to appear on

    snake.body.x = random(70, width - 200); // picks a random position for the snake to appear from
    snake.body.y = 0
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";

        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();

}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.body.x, fly.body.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.body.size / 2);
    if (eaten) {
        fly = randomizeFly() // Select a random fly type
            // Reset the fly
        resetFly(fly);
        randomItem = randomizeItem()

        // Bring back the tongue
        frog.tongue.state = "inbound";
        score += fly.pointVal // increment the score based on the point value of the fly
        frog.body.size += fly.pointVal // increase the size of the frog
        frogSound.play() // play the frog sound

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
    return (distance < secondValSize / 2); //checks if the distance is lower than the radius of the size of the second value if yes then it is overlapping if no then it is not overlapping
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        //Allow audio after user input
        userStartAudio();
        frog.tongue.state = "outbound";
    }
}