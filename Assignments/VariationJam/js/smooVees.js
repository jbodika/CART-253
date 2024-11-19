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



let activeSmoothie;
let gameInProgress = false;

/**
 * Draws the menu circles
 */
function drawMenu() {


    //  console.log(smoothies.drinks)
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

function randomizeElement(array) {
    if (!gameInProgress) {
        gameInProgress = true;
        randomizedValue = array[Math.floor(Math.random() * array.length)];
    }
    return randomizedValue; // Returns a single smoothie object 
}


function drawCounterItems() {
    image(blenderImg, 400, 140, 150, 210)
    image(frozenBerriesImg, 600, 200)
    image(milkImg, 500, 250, 80, 70)
    image(honeyjarImg, 650, 290)

    image(orangeImg, 630, 310)
    image(watermelonImg, 550, 210)
    image(cuttingBoardImg, 500, 500)
    image(bananaImg, 520, 260)
    image(yogurtImg, 600, 300, 20, 20)


}

function drawOrder() {
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
    fill('black');
    textFont(bagelFatOneFont);
    textSize(20);

    let yStartPos = 150; // default y position
    let yIncrement = 20; // space between each line

    activeSmoothie.ingredients.forEach((element, index) => {
        fill('white')
        stroke('black')

        text(`${index+1}. ${element}`, 100, yStartPos + index * yIncrement);
    });
    pop()


}




function drawSmoothieCup() {
    push();
    stroke('#c0c0c0')
    strokeWeight(3)
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