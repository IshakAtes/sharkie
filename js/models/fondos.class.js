class BackgroundObject extends MovableObject {
    y = 150;
    x = 0;
    width = 1100;
    height = 600;

    constructor(imagePath){
        super().loadImage(imagePath);
        
    }
    
}