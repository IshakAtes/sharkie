class MovableObject {
    x = 20;
    y = 300;
    img;
    height = 150;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;


    applyGravity() {
        setInterval(() => {
            if (this.y > 0) {
                this.y -= 0.2;
            }
        }, 1000 / 100);
    }

    loadImage(path) {
        this.img = new Image(); // new Image() ist keine Klasse. Es ist das gleiche wie ein img tag in Javascript <img src="#" alt="">
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image(); // new Image() ist keine Klasse. Es ist das gleiche wie ein img tag in Javascript <img src="#" alt="">
            img.src = path;
            this.imageCache[path] = img;
        });
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