class MovableObject extends DrawableObjects {
    speed = 0.15;
    // otherDirection = false;
    energy = 100;
    myCoins = 0;
    myPoisens = 0;
    lastHit = 0;
    hit_sound = new Audio('sounds/uhh.mp3');



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
        console.log(this.myPoisens);
    }


    isCollectCoin() {
        this.myCoins += 10;
    }


    
    hit() {
        this.hit_sound.play();
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