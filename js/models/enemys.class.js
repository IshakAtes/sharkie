class PufferFish extends MovableObject {
    height = 70;
    width = 70;
    x = 400 + Math.random() * 500;
    y = 600;

    constructor(){
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.animate();
    }

    animate() {
        setInterval( () => {
            this.x -= 0.7
        }, 1000 / 60)
        
    }

}


class JellyFish extends MovableObject {
    constructor(){
        super().loadImage('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');

        this.height = 70;
        this.width = 70;
        this.x = 600 + Math.random() * 500;
        this.y = 100;
    }
}


class BigBoss extends MovableObject {
    constructor(){
        super().loadImage('./img/2.Enemy/3 Final Enemy/1.Introduce/10.png');

        this.x = 900 + Math.random() * 500;
        this.y = -50;
    }
}