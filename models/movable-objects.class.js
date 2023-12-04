class MovableObject extends DrawableObjects {
    speed = 0.15;
    // otherDirection = false;
    energy = 100;
    myCoins = 0;
    myPoisens = 0;
    lastHit = 0;
    hit_sound = new Audio('sounds/uhh.mp3');
    shock_sound = new Audio('sounds/shock.mp3');
    slap_sound = new Audio('sounds/slap.mp3');
    offset = {top: 0, bottom: 0, left: 0, right: 0};
    /**
     * 
     * @param {number} speed
     * @param {number} energy
     * @param {number} myCoins
     * @param {number} myPoisens
     * @param {number} lastHit
     * @param {sound} hit_sound
     * @param {sound} shock_sound
     * @param {sound} slap_sound
     * @typedef {object} offset 
     */


    /**
     * This function start the tracking from sharkie coordinates
     * @param {number} X Coordinates from Whale
     */
    enemyTrackingX(X) {
        if (X <= this.world.character.x) {
            this.trackingRightSide(X);
        } else if (X > this.world.character.x) {
            this.trackingLeftSide(X);
        }
    }

    /**
     * This function track sharkie on the Left from Whale and the Whale follow him
     * 
     * @param {number} X Coordinates from Whale 
     */
    trackingLeftSide(X) {
        this.otherDirection = false;
        if (!(this.world.character.x == (X - 60))) {
            if (!(this.world.character.x >= (X - 60))) {
                this.world.finalBoss[0].x = this.world.finalBoss[0].x -= 8;
            }
        }
    }

    /**
     *  This function track sharkie on the Right from Whale and the Whale follow him
     * 
     * @param {number} X Coordinates from Whale
     */
    trackingRightSide(X) {
        this.otherDirection = true;
        if (!(this.world.character.x == (X + 300))) {
            if (!(this.world.character.x <= (X + 300))) {
                this.world.finalBoss[0].x = this.world.finalBoss[0].x += 8;
            } else if ((this.world.character.x > X && this.world.finalBoss[0].collidingBigBoss(this.world.character))) {
                this.world.character.hit(this.world.finalBoss[0]);
                this.world.statusBar.setPercentage(this.world.character.energy);
            }
        }
    }

    /**
     * This function track Sharkie and the Whale follow him Up and Down
     * @param {number} Y 
     */
    enemyTrackingY(Y) {
        if ((Y + 100) < this.world.character.y) {
            this.world.finalBoss[0].y = this.world.finalBoss[0].y += 10;
        } else if ((Y + 100) > this.world.character.y) {
            this.world.finalBoss[0].y = this.world.finalBoss[0].y -= 10;
        }
    }


    /**
     * This function i need for the gravitation of the Bubble
     */
    applyGravity() {
        setInterval(() => {
            if (this.y > 0) {
                this.y -= 0.2;
            }
        }, 1000 / 100);
    }


    /**
     * This function returns if character colliding with some other Objects
     * 
     * @param {object} mo 
     * @returns 
     */
    isColliding(mo) {
        return this.x + this.offset.left + this.width - this.offset.right > mo.x + mo.offset.left &&
        this.y + this.offset.top + this.height - this.offset.bottom > mo.y + mo.offset.top &&
        this.x + this.offset.left < mo.x + mo.offset.left + mo.width - mo.offset.right &&
        this.y + this.offset.top < mo.y + mo.offset.top + mo.height - mo.offset.bottom;
    }

    /**
     * This function returns if you colliding with the Whale
     * @param {object} char 
     * @returns 
     */
    collidingBigBoss(char) {
        return (this.x + 260) + this.width > char.x &&
        this.y + this.height > char.y &&
        (this.x + 260) < char.x &&
        this.y < char.y + char.height;
    }


    /**
     * This function increase my poisens Inventar
     */
    isCollectPoisen() {
        this.myPoisens += 10;
    }


    /**
     * This function increase myCoins Inventar
     */
    isCollectCoin() {
        this.myCoins += 10;
    }

    /**
     * This function Check and slap the detected enemies
     * 
     * @param {object} enemy 
     */
    slapAttack(enemy) {
        if (enemy instanceof PufferFish || enemy instanceof BigBoss) {
            enemy.energy -= 100;
            if (audioOn) {
                this.slap_sound.play();
            }
        }
    }
    
    /**
     * This function hit sharkie and decrease energy
     * 
     * @param {object} enemy 
     */
    hit(enemy) {
        this.playhittingSound(enemy);
        if (enemy instanceof ElectroJelly) {
            this.energy -= 30;
        } else {
            this.energy -= 5;
        }
        if(this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * This function check and returns the time how passed, to damage again the Shark
     * @returns 
     */
    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    /**
     * This function return if the Character are dead or alive
     * @returns 
     */
    isDead() {
        return this.energy <= 0;
    }


    /**
     * This function play a array with images
     * @param {Array} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * This function play a sound if you collide with a Jelly
     * 
     * @param {object} enemy 
     */
    playhittingSound(enemy) {
        if (enemy instanceof JellyFish && audioOn || enemy instanceof ElectroJelly && audioOn) {
            this.shock_sound.play();
        } else if (audioOn) {
            this.hit_sound.play();
        }
    }



    /**
     * This function increase your position x
     */
    moveRight() {
        this.x += this.speed;
    }


    /**
     * This function decrease your position x
     */
    moveLeft() {
        this.x -= this.speed;
    }


    /**
     * This function decrease you position y
     */
    moveUp() {
        this.y -= this.speed;
    }


    /**
     * This function increase your position y
     */
    moveDown() {
        this.y += this.speed;
    }


    /**
     * This function set a boolean true to show, Sharkie is in Bubble Attack mode
     */
    attackWithBubble() {
        this.bubbleAttackActive = true;
    }

    /**
     * This function set a boolean true to show, Sharkie is in Poisen Bubble Attack mode
     */
    attackWithPoisenBubble() {
        this.poisenBubbleAttackActive = true;
    }

    /**
     * This function set a boolean true to show, Sharkie is in Slap Attack mode
     */
    attackWithFinslap() {
        this.finslap = true;
    }
}