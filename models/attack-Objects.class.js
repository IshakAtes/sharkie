class AttackObject extends MovableObject {
    /**
     * The constructor is always executed first when the structure is called
     * 
     * @param {number} x Shows the coordinates on the x axis
     * @param {number} y Shows the coordinates on the y axis
     * @param {boolean} direction returns the message in which direction it is going
     */
    constructor(x, y, direction){
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.x = x;
        this.y = y;
        this.height = 40;
        this.width = 40;
        this.bubbleAttack(direction);
    }

    /**
     * Animate the Bubble Attack
     * @param {boolean} direction returns the message in which direction it is going
     */
    bubbleAttack(direction) {
        setTimeout(() => {
            this.applyGravity();
        }, 200);
        this.bubbleMove(direction);
        this.removeFiredBubbles();
    }

    /**
     * This function removes all Bubbles , if they reach a limit
     */
    removeFiredBubbles() {
        setInterval(() => {
            const indexToRemove = world.attackingObjects.findIndex(obj => obj.y < -1000);
            if (indexToRemove !== -1) {
                world.attackingObjects.splice(indexToRemove, 1);
            }
        }, 1000)
    }

    /**
     * This function shows how the bubble moves
     * 
     * @param {boolean} direction returns the message in which direction it is going
     */
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
    /**
     * The constructor is always executed first when the structure is called
     * 
     * @param {number} x Shows the coordinates on the x axis
     * @param {number} y Shows the coordinates on the y axis
     * @param {boolean} direction returns the message in which direction it is going
     */
    constructor(x, y, direction){
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png')
        this.x = x;
        this.y = y;
        this.height = 40;
        this.width = 40;
        this.poisenAttack(direction);
    }

    /**
     * This function Animate the Poisen Bubble Attack
     * 
     * @param {boolean} direction returns the message in which direction it is going
     */
    poisenAttack(direction) {
        setTimeout(() => {
            this.applyGravity();
        }, 200);
        this.bubbleMove(direction);
    }

    /**
     * This function show how to moves the Bubble
     * 
     * @param {boolean} direction 
     */
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