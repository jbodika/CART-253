/*
* Floatie SmooVee
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
let evilSmoothies;
let vee = new Vee(undefined, 0, 300, 200, 600);
let veeMood = 'neutral';

/**
 * Function to switch picture of the character
 */
function displayVee() {
    if (veeMood === 'neutral') {
        vee.image = veeImg;
    }
    if (veeMood === 'angry') {
        vee.image = veeAngry;
    } else if (veeMood === 'crazy') {
        vee.image = veeCrazy;
    } else if (veeMood === 'happy') {
        vee.image = veeHappy;
    } else if (veeMood === 'sad') {
        vee.image = veeSad;
    }

    console.log(vee);
    vee.display();

    let textArea = new TextArea(20, 675, 300, 80, 20);
    textArea.addText("", 165, 700, 20, 'salmon');
    textArea.display('#fff', '#000');
}