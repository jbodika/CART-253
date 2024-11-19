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


function testingThingsOut() {
    console.log('hey')
}
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

function drawCounterItems() {
    image(blenderImg, 10, 140, 150, 210)
    image(frozenBerriesImg, 600, 200)



    image(milkImg, 400, 250, 80, 70)
    image(honeyjarImg, 420, 290)
    image(yogurtImg, 400, 300, 20, 20)
    image(orangeImg, 450, 310)
    image(watermelonImg, 550, 210)
    image(cuttingBoardImg, 500, 500)
    image(bananaImg, 520, 260)
}




function drawSmoothieCup() {

}