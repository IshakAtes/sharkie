class MovableObject {
    x = 20;
    y = 300;
    img;
    height = 150;
    width = 150;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;


    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % this.images_IDLE.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight(){
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
        
    }
}