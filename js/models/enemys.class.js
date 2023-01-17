class PufferFish extends MovableObject {
    height = 70;
    width = 70;
    x = 400 + Math.random() * 500;
    y = 600;
    Images_Idle = [
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    constructor(){
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        
        this.loadImages(this.Images_Idle);
        this.animate();
        this.speed = 0.33 + Math.random() * 0.25;
        this.moveLeft();
    }


    animate() {
        setInterval(() => {
            let i = this.currentImage % this.Images_Idle.length;
            let path = this.Images_Idle[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 99);
    }

}


class JellyFish extends MovableObject {
    height = 70;
    width = 70;
    x = 600 + Math.random() * 500;
    y = 200;
    Images_Idle = [
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];
    constructor(){
        super().loadImage('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.Images_Idle);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.25;
        this.moveUp();
        
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.Images_Idle.length;
            let path = this.Images_Idle[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }
}


class BigBoss extends MovableObject {
    constructor(){
        super().loadImage('./img/2.Enemy/3 Final Enemy/1.Introduce/10.png');

        this.x = 900 + Math.random() * 500;
        this.y = -50;
    }
}