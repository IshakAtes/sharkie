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



    enemyTrackingX(X) {
        if (X <= this.world.character.x) {
            this.trackingRightSide(X);
        } else if (X > this.world.character.x) {
            this.trackingLeftSide(X);
        }
    }
    trackingLeftSide(X) {
        this.otherDirection = false;
        if (!(this.world.character.x == (X - 60))) {
            if (!(this.world.character.x >= (X - 60))) {
                this.world.finalBoss[0].x = this.world.finalBoss[0].x -= 8;
            }
        }
    }

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

    enemyTrackingY(Y) {
        if ((Y + 100) < this.world.character.y) {
            this.world.finalBoss[0].y = this.world.finalBoss[0].y += 10;
        } else if ((Y + 100) > this.world.character.y) {
            this.world.finalBoss[0].y = this.world.finalBoss[0].y -= 10;
        }
    }



    applyGravity() {
        setInterval(() => {
            if (this.y > 0) {
                this.y -= 0.2;
            }
        }, 1000 / 100);
    }


    // isColliding
    isColliding(mo) {
        return this.x + this.offset.left + this.width - this.offset.right > mo.x + mo.offset.left &&
        this.y + this.offset.top + this.height - this.offset.bottom > mo.y + mo.offset.top &&
        this.x + this.offset.left < mo.x + mo.offset.left + mo.width - mo.offset.right &&
        this.y + this.offset.top < mo.y + mo.offset.top + mo.height - mo.offset.bottom;
    }

    // colliding BigBoss if you on the ride side
    collidingBigBoss(char) {
        return (this.x + 260) + this.width > char.x &&
        this.y + this.height > char.y &&
        (this.x + 260) < char.x &&
        this.y < char.y + char.height;
    }


    isCollectPoisen() {
        this.myPoisens += 10;
    }


    isCollectCoin() {
        this.myCoins += 10;
    }


    slapAttack(enemy) {
        if (enemy instanceof PufferFish || enemy instanceof BigBoss) {
            enemy.energy -= 100;
            if (audioOn) {
                this.slap_sound.play();
            }
        }
    }
    
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


    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    isDead() {
        return this.energy <= 0;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playhittingSound(enemy) {
        if (enemy instanceof JellyFish && audioOn) {
            this.shock_sound.play();
        } else if (audioOn) {
            this.hit_sound.play();
        }
    }



    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }


    moveUp() {
        this.y -= this.speed;
    }


    moveDown() {
        this.y += this.speed;
    }


    attackWithBubble() {
        this.bubbleAttackActive = true;
    }

    attackWithPoisenBubble() {
        this.poisenBubbleAttackActive = true;
    }

    attackWithFinslap() {
        this.finslap = true;
    }
}