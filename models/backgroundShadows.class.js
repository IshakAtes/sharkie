class BackgroundObject extends MovableObject {
    width = 1024;
    height = 600;

    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.x = x;
        this.y = y - this.height; // y koordinate berechnen indem die height von der vergebenen canvas höhe abgezogen wird.
    }
}