class BarrierBlock extends MovableObject {
    y = 10;
    x = -920;
    // width = 30;
    height = 1000;
    constructor(){
        super().loadImage('./img/3. Background/Barrier/3.png');
    }
    
}

class Stone extends MovableObject {
    width = 800;
    height = 500;
    constructor(x, y){
        super().loadImage('./img/3. Background/Barrier/2.png');
        this.x = x;
        this.y = y;
    }
}

class Hole extends MovableObject {
    y = 0;
    x = -900;
    height = 700;
    width = 900;
    constructor() {
        super().loadImage('./img/3. Background/Barrier/1.png');
    }
}