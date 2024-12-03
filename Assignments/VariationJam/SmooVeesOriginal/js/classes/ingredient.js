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
     * display the ingredient on the canvas
     */
    display() {
        if (this.image) {
            image(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        }
    }


}