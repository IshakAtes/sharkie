class Light extends MovableObject {
    y = 0;
    width = 1000;
    height = 900;

    constructor(){
        super().loadImage('./img/3. Background/Layers/1. Light/1.png');

        this.x = 100 + Math.random() * 500;
        
    }
    
}