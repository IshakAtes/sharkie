class AttackObject extends MovableObject {
    constructor(x, y, direction){
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.x = x;
        this.y = y;
        this.height = 40;
        this.width = 40;
        this.bubbleAttack(direction);
    }

    bubbleAttack(direction) {
        setTimeout(() => {
            this.applyGravity();
        }, 200);
        this.bubbleMove(direction);
        this.removeFiredBubbles();
    }

    removeFiredBubbles() {
        setInterval(() => {
            const indexToRemove = world.attackingObjects.findIndex(obj => obj.y < -1000);
            if (indexToRemove !== -1) {
                world.attackingObjects.splice(indexToRemove, 1);
            }
        }, 1000)
    }

    bubbleMove(direction) {
        setInterval(() => {
            if (this.y > 0) {
                if (!direction) {
                    this.x += 2;
                } else {
                    this.x -= 2;
                }
                setTimeout(() => {
                    this.y -= 5.0;
                }, 2500);
            }
        }, 1000 / 100);
    }

}



class PoisenAttack extends MovableObject {
    constructor(x, y, direction){
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png')
        this.x = x;
        this.y = y;
        this.height = 40;
        this.width = 40;
        this.poisenAttack(direction);
    }

    poisenAttack(direction) {
        setTimeout(() => {
            this.applyGravity();
        }, 200);
        this.bubbleMove(direction);
    }

    bubbleMove(direction) {
        setInterval(() => {
            if (this.y > 0) {
                if (!direction) {
                    this.x += 2;
                } else {
                    this.x -= 2;
                }
                setTimeout(() => {
                    this.y -= 5.0;
                }, 2500);
            }
        }, 1000 / 100);
    }

}