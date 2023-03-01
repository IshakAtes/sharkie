class PufferFish extends MovableObject {
    height = 70;
    width = 70;
    x = 400 + Math.random() * 500;
    y = 600;
    images_IDLE = [
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    constructor(){
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        
        this.loadImages(this.images_IDLE);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.55;
        this.moveLeft();
    }


    animate() {
        setInterval(() => {
            let i = this.currentImage % this.images_IDLE.length;
            let path = this.images_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 99);

        setInterval(() => {
            if (this.x <= 50) {
                this.moveRight();
                this.otherDirection = true;
            }
        }, 99);
    }

}


class JellyFish extends MovableObject {
    height = 70;
    width = 70;
    x = 600 + Math.random() * 500;
    y = 200;
    images_IDLE = [
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];
    constructor(){
        super().loadImage('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.images_IDLE);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.25;
        this.moveUp();
        
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.images_IDLE.length;
            let path = this.images_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);

        setInterval(() => {
            if (this.y <= 10) {
                this.moveDown();
                this.otherDirection = true;
            }

            if (this.y >= 450) {
                this.moveUp();
                this.otherDirection = true;
            }
        }, 1000);

    }
    
}