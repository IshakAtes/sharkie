class Water extends MovableObject {
    y = 0;
    width = 1100;
    height = 900;

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        
    }
}