class Floor extends MovableObject {
    width = 1024;
    height = 500;

    /**
     * The constructor is always executed first when the structure is called
     * 
     * @param {string} imagePath cointain the link to the image 
     * @param {number} x Shows the coordinates on the x axis
     */
    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 768 - this.height;
    }
}