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

function moveFood() {

}

function drawDialog() {
    console.log(warDialog)
}




function drawAliveItems() {
    // image(cuttingBoardImg.image, cuttingBoardImg.x - cuttingBoardImg.size / 2, cuttingBoardImg.y - cuttingBoardImg.size / 2, cuttingBoardImg.size, cuttingBoardImg.size);

    //All liquids 
    image(milkImg.image, 0, 0);
    image(honeyjarImg.image, 100, honeyjarImg.y - honeyjarImg.size / 2, honeyjarImg.size, honeyjarImg.size);
    image(yogurtImg.image, 100, yogurtImg.y - yogurtImg.size / 2, yogurtImg.size, yogurtImg.size);



    // All solids
    image(frozenBerriesImg.image, frozenBerriesImg.x - frozenBerriesImg.size / 2, frozenBerriesImg.y - frozenBerriesImg.size / 2, frozenBerriesImg.size, frozenBerriesImg.size);
    image(watermelonImg.image, 300, 350);
    image(orangeImg.image, orangeImg.x - orangeImg.size / 2, orangeImg.y - orangeImg.size / 2, orangeImg.size, orangeImg.size);
    image(bananaImg.image, bananaImg.x - bananaImg.size / 2, bananaImg.y - bananaImg.size / 2, bananaImg.size, bananaImg.size);

    //   image(blenderImg, gameBlender.x - gameBlender.size / 2, gameBlender.y - gameBlender.size / 2, gameBlender.size, gameBlender.size)

}