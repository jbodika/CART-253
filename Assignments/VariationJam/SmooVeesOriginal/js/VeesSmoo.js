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



// All images 
const warAppleImg = {
    name: "Green Apple",
    image: undefined,
    x: 50,
    y: -200,
    size: 80
}

const warAvocadoImg = {
    name: "Avocado",
    image: undefined,
    x: 130,
    y: -200,
    size: 125,
}
const warBananaImg = {
    name: "Banana",
    image: undefined,
    x: 210,
    y: -200,
    size: 80
};

const warChiaSeedsImg = {
    name: "Chia Seeds",
    image: undefined,
    x: 290,
    y: -200,
    size: 80
}

const warCocoaPowderImg = {
    name: "Cocoa Powder",
    image: undefined,
    x: 775,
    y: -200,
    size: 80
}

const warCoconutImg = {
    name: "Coconut Water",
    image: undefined,
    x: 450,
    y: 800,
    size: 80
}

const warFrozenBerriesImg = {
    name: "Frozen Berries",
    image: undefined,
    x: 670,
    y: -200,
    size: 80
}




const warHoneyjarImg = {
    name: "Honey",
    image: undefined,
    x: 510,
    y: 800,
    size: 80
};
const warMangoImg = {
    name: "Mango Chunks",
    image: undefined,
    x: 500,
    y: -200,
    size: 80,
};

const warMilkImg = {
    name: "Milk",
    image: undefined,
    x: 450,
    y: 800,
    size: 85
};

const warOrangeImg = {
    name: "Orange",
    image: undefined,
    x: 630,
    y: -200,
    size: 80,

};

const warOrangeJuiceImg = {
    name: "Orange Juice",
    image: undefined,
    x: 325,
    y: 800,
    size: 125
};
const warPeanutButterImg = {
    name: "Peanut Butter",
    image: undefined,
    x: 550,
    y: 800,
    size: 80
}


const warPineappleImg = {
    name: "Pineapple Chunks",
    image: undefined,
    x: 720,
    y: -200,
    size: 80
}


const warSpinachImg = {
    name: "Spinach Leaves",
    image: undefined,
    x: 635,
    y: -200,
    size: 80
}

const warStrawberryImg = {
    name: "Strawberry",
    image: undefined,
    x: 635,
    y: -200,
    size: 80
}

const warWaterImg = {
    name: "Water",
    image: undefined,
    x: 400,
    y: 800,
    size: 80
}

const warWatermelonImg = {
    name: "Watermelon",
    image: undefined,
    x: 550, //630 - 280
    y: -10,
    size: 125
};



const warYogurtImg = {
    name: "Yogurt",
    image: undefined,
    x: 750,
    y: 800,
    size: 80
};



let warDialog;
let liquids = [warCoconutImg, warHoneyjarImg, warOrangeJuiceImg, warPeanutButterImg, warWaterImg, warYogurtImg]
let solids = [warAppleImg, warAvocadoImg, warBananaImg, warChiaSeedsImg, warCocoaPowderImg, warFrozenBerriesImg, warMangoImg, warOrangeImg, warPineappleImg, warSpinachImg, warStrawberryImg]




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

console.log(images)

/**
 * Function to move the leader ingredients on the screen
 */
function moveLeaders() {
    liquidsLeaderImg.y = constrain(liquidsLeaderImg.y, liquidsLeaderImg.y - 2.5, 420);
    solidLeaderImg.y = constrain(solidLeaderImg.y + 1, -10, 145);

}

function drawDialog() {
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

function drawAliveItems() {
    // Display all solids
    solids.forEach((el) => {
        image(el.image, el.x - el.size / 2, el.y - el.size / 2, el.size, el.size);
    });

    // Display all liquids
    liquids.forEach((el) => {
        image(el.image, el.x - el.size / 2, el.y - el.size / 2, el.size, el.size);
    });

    // Leaders
    image(watermelonImg.image, solidLeaderImg.x, solidLeaderImg.y, solidLeaderImg.size, solidLeaderImg.size);
    image(milkImg.image, liquidsLeaderImg.x, liquidsLeaderImg.y, liquidsLeaderImg.size, liquidsLeaderImg.size);

    // Remove offscreen items
    removeOffscreenItems();
}

/**
 * Remove offscreen solids and liquids
 */
function removeOffscreenItems() {
    // Remove solids that are fully offscreen
    solids = solids.filter(el => el.y <= height + el.size);

    // Remove liquids that are fully offscreen 
    liquids = liquids.filter(el => el.y >= -el.size);
}

/**
 * Function to move the pawn ingredients on the screen
 */
function movePawns() {
    if (!dialogActive) {
        // Move solids
        solids.forEach(el => {
            el.y += 1; // Move downward
        });

        // Move liquids
        liquids.forEach(el => {
            el.y -= 1; // Move upward
        });
    }
}

function pushIngredient() {
    solids.forEach((ingredient) => {
        if (checkOverlap(mouseX, mouseY, ingredient.x, ingredient.y, ingredient.size)) {
            ingredient.y -= 30; // Push upward
        }
    });

    liquids.forEach((ingredient) => {
        if (checkOverlap(mouseX, mouseY, ingredient.x, ingredient.y, ingredient.size)) {
            ingredient.y += 30; // Push downward
        }
    });
}

function retractSituation() {

}