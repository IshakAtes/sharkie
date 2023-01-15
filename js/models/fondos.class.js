class BackgroundObject extends MovableObject {
    width = 1100;
    height = 600;

    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        
    }
    
}