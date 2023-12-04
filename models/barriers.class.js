class BarrierBlock extends MovableObject {
    world;
    /**
     * The constructor is always executed first when the structure is called
     * @param {number} x Shows the coordinates on the x axis
     * @param {number} y Shows the coordinates on the y axis
     * @param {number} height contains the size
     */
    constructor(x, y, height){
        super().loadImage('./img/3. Background/Barrier/3.png');
        this.x = x;
        this.y = y;
        this.height = height;
    }
}

class Stone extends MovableObject {
    /**
     * The constructor is always executed first when the structure is called
     * 
     * @param {number} x Shows the coordinates on the x axis
     * @param {number} y Shows the coordinates on the y axis
     * @param {number} width contains the size
     * @param {number} height contains the size
     */
    constructor(x, y, width, height){
        super().loadImage('./img/3. Background/Barrier/2.png');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

class Hole extends MovableObject {
    /**
     * The constructor is always executed first when the structure is called
     * 
     * @param {number} x Shows the coordinates on the x axis
     * @param {number} y Shows the coordinates on the y axis
     * @param {number} width contains the size
     * @param {number} height contains the size
     */
    constructor(x, y, width, height) {
        super().loadImage('./img/3. Background/Barrier/1.png');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}