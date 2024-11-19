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
let gameInProgress = false;
let randomizedValue;

// All images 
let watermelonImg={
    image:undefined,
    x:550,
    y:210,
    size: 125
};

let frozenBerriesImg ={
    image:undefined,
    x:600,
    y:200,
    size:125
}


let cuttingBoardImg={
    image:undefined,
    x:500,
    y:500,
    size:200
};
let bananaImg={
    image:undefined,
    x:520,
    y:260,
    size:64
};
let orangeImg={
    image:undefined,
    x:630,
    y:310
};
let honeyjarImg={
    image:undefined,
    x:650,
    y:290,
    size:64

};
let milkImg={
    image:undefined,
    x:500,
    y:250,
    size:{
        x:80,
        y:70
    }

};
let yogurtImg={
    image:undefined,
    x:600,
    y:300,
    size:{
        x:20,
        y:20
    }
};
let smoothies;

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




function drawCounterItems() {
  //  image(blenderImg.image, blenderImg.x, blenderImg.y,blenderImg.size)
    image(frozenBerriesImg.image, frozenBerriesImg.x, frozenBerriesImg.y,frozenBerriesImg.size)
    image(milkImg.image, milkImg.x, milkImg.y , milkImg.size.x,milkImg.size.y)
    image(honeyjarImg.image, honeyjarImg.x, honeyjarImg.y, honeyjarImg.size)

    image(orangeImg.image, orangeImg.x, orangeImg.y, orangeImg.size)
    image(watermelonImg.image, watermelonImg.x, watermelonImg.y,watermelonImg.size)
    image(cuttingBoardImg.image, cuttingBoardImg.x, cuttingBoardImg.y,cuttingBoardImg.size)
    image(bananaImg.image, bananaImg.x, bananaImg.y, bananaImg.size)
    image(yogurtImg.image, yogurtImg.x, yogurtImg.y, yogurtImg.size.x,yogurtImg.size.y)
 
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

function selectFoodElement(){
    if(checkOverlap(mouseX, mouseY,cuttingBoardImg.x,cuttingBoardImg.y,cuttingBoardImg.size)){
        console.log('chop chop')
    }
}
