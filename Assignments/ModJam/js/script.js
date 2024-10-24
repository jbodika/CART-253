/**
 * Frogfrogfrog
 * Pippin Barr
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

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};
//declare gloabal variable 
let frogSound;
let heartImg;
let blankHeartImg;
let fliesSkipped = 0
let score = 0

//function to load assets before the page is loaded
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
    // Give the fly its first random position
    resetFly();
}

function draw() {
    background("#87ceeb");
    if (gameOver()) {
        moveFly();
        drawFly();
        moveFrog();
        moveTongue();
        drawFrog();
        drawHearts();
        checkTongueFlyOverlap();
        moveHearts()
        drawScore()
    }


}

let yOffset = 0; // Variable to control the y-position of the image
let speed = 0.02; // Speed of the movement

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
    // // Create the up-down movementwith the sin() function
    yOffset = sin(frameCount * speed) * 5; // Adjust the amplitude by 5
    switch (fliesSkipped) {
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

        default:
            image(heartImg, width - 100, 30 + yOffset);
            image(heartImg, width - 70, 30 + yOffset);
            image(heartImg, width - 40, 30 + yOffset);
    }

}

function moveHearts() {
    // heart1.x += 2
}
/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
        fliesSkipped++
        console.log(fliesSkipped)
    }
}

function gameOver() {
    if (fliesSkipped == 4) {
        textSize(20)
        text('its over', width / 2, height / 2)
        return false
    }
    return true
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
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
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
        score++ // increment the score
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