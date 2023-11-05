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



    enemyTrackingX(X) {
        this.world.level.enemies.forEach(boss => {
            if (boss instanceof BigBoss) {
                if (X <= this.world.character.x) {
                    this.otherDirection = true;
                    if (!((X + 300) == this.world.character.x)) {
                        let newCoordinateRight = boss.x += 10;
                        boss.x = newCoordinateRight;
                    }
                } else if (X > this.world.character.x) {
                    this.otherDirection = false;
                    if (!((X - 60) == this.world.character.x)) {
                        let newCoordinateLeft = boss.x -= 10;
                        boss.x = newCoordinateLeft;
                    }
                }
            }
        });
    }

    enemyTrackingY(Y) {
        this.world.level.enemies.forEach(boss => {
            if (boss instanceof BigBoss) {
                if ((Y + 100) < this.world.character.y) {
                    let newCoordinateUp = boss.y += 10;
                    boss.y = newCoordinateUp;
                } else if ((Y + 100) > this.world.character.y) {
                    let newCoordinateDown = boss.y -= 10;
                    boss.y = newCoordinateDown;
                }
            }
        });
    }



    applyGravity() {
        setInterval(() => {
            if (this.y > 0) {
                this.y -= 0.2;
            }
        }, 1000 / 100);
    }


    // isColliding(pufferFish)
    isColliding(char) {
        return this.x + this.width > char.x &&
        this.y + this.height > char.y &&
        this.x < char.x &&
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
            this.slap_sound.play();
        }
    }
    
    hit(enemy) {
        this.playhittingSound(enemy);
        this.energy -= 5;
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
        if (enemy instanceof JellyFish) {
            this.shock_sound.play();
        } else {
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