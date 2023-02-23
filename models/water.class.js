class Water extends MovableObject {
    y = 0;
    width = 1024;
    height = 800;

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        
    }
}