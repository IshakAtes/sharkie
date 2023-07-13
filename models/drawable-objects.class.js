class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;
    x = 20;
    y = 300;
    height = 150;
    width = 150;



    loadImage(path) {
        this.img = new Image(); // new Image() ist keine Klasse. Es ist das gleiche wie ein img tag in Javascript <img src="#" alt="">
        this.img.src = path;
    }


    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn('Error loading image', e);
            console.log('Could not load image', this.img.src)
        }
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


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image(); // new Image() ist keine Klasse. Es ist das gleiche wie ein img tag in Javascript <img src="#" alt="">
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    bubbleAttack() {
        this.playAnimation(this.images_BUBBLE); // Bubble Animation
    }


    poisenAttack() {
        this.playAnimation(this.images_POISENBUBBLE); // PoisenBubble Animation
    }
}