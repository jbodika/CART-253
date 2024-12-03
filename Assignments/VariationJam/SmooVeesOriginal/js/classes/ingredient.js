class Ingredient {
    constructor(name, image, openImage = null, x, y, size, action = null, actionBtnLbl = null) {
        this.name = name;
        this.image = image;
        this.openImage = openImage;
        this.x = x;
        this.y = y;
        this.size = size;
        this.action = action;
        this.actionBtnLbl = actionBtnLbl;
    }

    /**
     * Display the ingredient on the canvas.
     */
    display() {
        if (this.image) {
            image(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        } //foodObj.x - foodObj.size / 2, foodObj.y - foodObj.size / 2, foodObj.size, foodObj.size
    }

    /**
     * Update the position of the ingredient.
     * @param {number} newX - New x-coordinate
     * @param {number} newY - New y-coordinate
     */
    updatePosition(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    /**
     * Trigger the ingredient's action.
     */
    triggerAction() {
        console.log(`${this.name} performs the action: ${this.action}`);
    }
}