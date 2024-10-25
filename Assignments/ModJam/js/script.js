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
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3,
    colour: '#181C14',
    pointVal: 1,
    minShake: -0.5,
    maxShake: 0.35
};

// Has a position, size, and speed of horizontal movement
const craneFlies = {
    x: 0,
    y: 200, // Will be random
    size: 7,
    speed: 4,
    colour: '#697565',
    pointVal: 3,
    minShake: -0.10,
    maxShake: 0.40
};

// Has a position, size, and speed of horizontal movement
const fruitFlies = {
    x: 0,
    y: 200, // Will be random
    size: 5,
    speed: 5,
    colour: '#3C3D37',
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
        drawScore()

    }
    frogOverload();


}


function frogOverload() {
    if (expanding && expansionFrames < 100) {
        frog.body.size += 100; // Increase the size of the frog
        textSize(20);
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
    fly.x += fly.speed;

    // Add random shaking motion to both x and y values
    fly.x += random(fly.minShake, fly.maxShake); // Horizontal shake
    fly.y += random(fly.minShake, fly.maxShake); // Vertical shake 
    // Handle the fly going off the canvas
    if (fly.x > width) {
        // Select a random fly type
        fly = randomizeFly()
        resetFly(fly); // Reset the fly
        fliesSkipped++
        console.log(fliesSkipped)
    }
}


function gameInProgress() {

    if (fliesSkipped == 4) { //End game if 4 flies have been skipped
        textSize(20);
        text('Game over!', width / 2, height / 2);
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
        text('Game over!', width / 2, height / 2);
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
    fill(fly.colour);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(70, 300);
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
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Select a random fly type
        fly = randomizeFly()
            // Reset the fly
        resetFly(fly);
        // Bring back the tongue
        frog.tongue.state = "inbound";
        score += fly.pointVal // increment the score based on the point value of the fly
        frog.body.size += fly.pointVal // increase the size of the frog
        console.log(frog.body.size)
        frogSound.play() // play the frog sound
    }
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