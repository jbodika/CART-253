/*
 * VeesSmoo 
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


let warDialog;
let liquids = [coconutImg, honeyjarImg, orangeJuiceImg, peanutButterImg, waterImg, yogurtImg]
let solids = [appleImg, avocadoImg, bananaImg, chiaSeedsImg, cocoaPowderImg, frozenBerriesImg, mangoImg, orangeImg, pineappleImg, spinachImg, strawberryImg]


function moveFood() {

}

function drawDialog() {
    console.log(warDialog.dialog)
}


let solidLeaderImg = {
    x: 350,
    y: -10,
    size: 175
};


let liquidsLeaderImg = {
    x: 350, //350
    y: 800, //420
    size: 175
};

function drawAliveItems() {
    let xPos = 10
        //All liquids 
    solids.forEach((el) => {
        image(el.image, xPos, 50, el.size, el.size);
        xPos += 70;
    });
    xPos = 95
    image(watermelonImg.image, solidLeaderImg.x, solidLeaderImg.y, solidLeaderImg.size, solidLeaderImg.size);

    // All solids
    liquids.forEach((el) => {
        image(el.image, xPos, 630, el.size, el.size);
        xPos += 125;
    });
    image(milkImg.image, liquidsLeaderImg.x, liquidsLeaderImg.y, liquidsLeaderImg.size, liquidsLeaderImg.size);

}

/**
 * Function to move the leader ingredients on the screen
 */
function moveLeaders() {
    liquidsLeaderImg.y = constrain(liquidsLeaderImg.y, liquidsLeaderImg.y - 2.5, 420);
    solidLeaderImg.y = constrain(solidLeaderImg.y + 1, -10, 145);
    if (dialogActive) {
        let textArea = new TextArea(300, 325, 275, 75, 20);

        // Display current dialog
        if (isLiquidTurn && warDialog.dialog.liquids[currSpeechIndex]) {
            textArea.addText(warDialog.dialog.liquids[currSpeechIndex], 430, 355, 20, 'black');
            textArea.display('lightblue');
        } else if (!isLiquidTurn && warDialog.dialog.solids[currSpeechIndex]) {
            textArea.addText(warDialog.dialog.solids[currSpeechIndex], 430, 355, 20, 'black');
            textArea.display('lightgreen');
        }


    }
}