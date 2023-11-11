class BarrierBlock extends MovableObject {
    // width = 30;
    constructor(x, y, height){
        super().loadImage('./img/3. Background/Barrier/3.png');
        this.x = x;
        this.y = y;
        this.height = height;
    }
    
}

class Stone extends MovableObject {
    constructor(x, y, width, height){
        super().loadImage('./img/3. Background/Barrier/2.png');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

class Hole extends MovableObject {
    constructor(x, y, width, height) {
        super().loadImage('./img/3. Background/Barrier/1.png');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}