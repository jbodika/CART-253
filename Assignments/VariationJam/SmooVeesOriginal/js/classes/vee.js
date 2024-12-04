class Vee {
    constructor(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * display the ingredient on the canvas
     */
    display() {
        if (this.image) {
            image(this.image, this.x, this.y, this.width, this.height);
        }
    }

}