class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.y > 0) {
                this.y -= 0.2;
            }
        }, 1000 / 100);
    }





    drawCollisionFrame(ctx) {
        if(this instanceof Character || this instanceof PufferFish || this instanceof JellyFish || this instanceof BigBoss){
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    // isColliding(pufferFish)
    isColliding(char) {
        return this.x + this.width > char.x &&
        this.y + this.height > char.y &&
        this.x < char.x &&
        this.y < char.y + char.height;
    }

    
    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
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
        return this.energy == 0;
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

    bubbleAttack() {
        this.playAnimation(this.images_BUBBLE); // Bubble Animation
    }

}