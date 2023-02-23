class Floor extends MovableObject {
    width = 1024;
    height = 500;

    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
    
}