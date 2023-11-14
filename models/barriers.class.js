class BarrierBlock extends MovableObject {
    world;
    constructor(x, y, height){
        super().loadImage('./img/3. Background/Barrier/3.png');
        this.x = x;
        this.y = y;
        this.height = height;
        // this.checkColliding();
    }

    // checkColliding() {
    //     setInterval(() => {
    //         if ((this.world.character).isColliding(this)) {
    //             console.log(this, this.world.character);
    //             if (this.world.character.x < this.x) {
    //                 this.world.character.stopMoveRight = true;
    //             }
                
    //             if (this.world.character.y < this.y) {
    //                 this.world.character.stopMoveDown = true;
    //             }
    //         } else if ((this).isColliding(this.world.character)) {
    //             if (this.world.character.x > this.x) {
    //                 this.world.character.stopMoveLeft = true;
    //             }
    //             if (this.world.character.y > this.y) {
    //                 this.world.character.stopMoveUp = true;
    //             }
    //         } else if (!this.world.character.isColliding(this)) {
    //             this.world.character.stopMoveRight = false;
    //             this.world.character.stopMoveLeft = false;
    //             this.world.character.stopMoveUp = false;
    //             this.world.character.stopMoveDown = false;
    //         }
    //     }, 100);
    // }
}

class Stone extends MovableObject {
    world;
    constructor(x, y, width, height){
        super().loadImage('./img/3. Background/Barrier/2.png');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

class Hole extends MovableObject {
    world;
    constructor(x, y, width, height) {
        super().loadImage('./img/3. Background/Barrier/1.png');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}