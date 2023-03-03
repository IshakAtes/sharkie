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
                // this.x += 2;
                this.y -= 0.2;
                setTimeout(() => {
                    this.y -= 5.0;
                }, 2400);
            }
        }, 1000 / 60);
    }



    loadImage(path){
        this.img = new Image(); // new Image() ist keine Klasse. Es ist das gleiche wie ein img tag in Javascript <img src="#" alt="">
        this.img.src = path;
    }

    loadImages(arr){
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

    moveRight(){
        setInterval( () => {
            this.x += this.speed
        }, 1000 / 60)
    }


    moveLeft(){
        setInterval( () => {
            this.x -= this.speed
        }, 1000 / 60)
    }


    moveUp(){
        setInterval(() => {
            this.y -= this.speed
        }, 1000 / 60);
    }


    moveDown(){
        setInterval( () => {
            this.y += this.speed
        }, 1000 / 60)
    }
}