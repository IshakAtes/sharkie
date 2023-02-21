class BackgroundObject extends MovableObject {
    width = 1100;
    height = 600;

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 768 - this.height; // y koordinate berechnen indem die height von der vergebenen canvas höhe abgezogen wird
        
    }
    
}