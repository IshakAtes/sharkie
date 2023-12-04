class PufferFish extends MovableObject {
    images_IDLE = [
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];
    images_INCOMA = [
        './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',
    ];
    images_BLOW = [
        './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
    ];

    images_BLOWTED = [
        './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
    ];
    offset = {top: 4, bottom: 20, left: 0, right: 6};
    height = 70;
    width = 70;
    x = 400 + Math.random() * 500;
    y = 624;

    /**
     * The constructor is always executed first when the structure is called
     */
    constructor(){
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.images_IDLE);
        this.loadImages(this.images_INCOMA);
        this.loadImages(this.images_BLOW);
        this.loadImages(this.images_BLOWTED);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.55;
    }

    /**
     * This function Animate the movement from the puffer fish
     */
    animate() {
        let isDeadMovementExecuted = false;
        let blowUp = false;
        let bloated = false;
        setInterval(() => {
            if (bloated) {
                this.playAnimation(this.images_BLOWTED);
            } else if (blowUp) {
                this.playAnimation(this.images_BLOW);
                setTimeout(() => {
                    bloated = true;
                }, 400);
            } else if (this.isDead()) {
                this.playAnimation(this.images_INCOMA);
            } else {
                this.playAnimation(this.images_IDLE);
            }
        }, 99);

        setInterval(() => {
            if (this.isDead() && !isDeadMovementExecuted && this.otherDirection) {
                this.x = this.x -= 15;
                setTimeout(() => {
                    isDeadMovementExecuted = true;
                    blowUp = true;
                }, 400);
            } else if (this.isDead() && isDeadMovementExecuted) {
                this.moveUp();
            } else if (this.x > 50 && !this.otherDirection && !this.isDead()) {
                this.moveLeft();
                if (this.x <= 50) {
                    this.otherDirection = true;
                }
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead() && !isDeadMovementExecuted && !this.otherDirection) {
                this.x = this.x += 15;
                setTimeout(() => {
                    isDeadMovementExecuted = true;
                    blowUp = true;
                }, 400);
            } else if (this.isDead() && isDeadMovementExecuted) {
                this.moveUp();
            } else if (this.x <= 1500 && this.otherDirection && !this.isDead()) {
                this.moveRight();
                if (this.x >= 1500) {
                    this.otherDirection = false;
                }
            }
        }, 1000 / 60);
    }
    
}




class JellyFish extends MovableObject {
    images_IDLE = [
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];
    images_DEAD = [
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ];
    height = 70;
    width = 70;
    x = 600 + Math.random() * 500;
    y = 200;
    offset = {top: 4, bottom: 14, left: 2, right: 4};

    /**
     * The constructor is always executed first when the structure is called
     */
    constructor(){
        super().loadImage('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.images_IDLE);
        this.loadImages(this.images_DEAD);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.25;
    }

    /**
     * This function animate the Jellyfish
     */
    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.images_DEAD);
                this.otherDirection = false;
                this.moveUp();
            } else {
                this.playAnimation(this.images_IDLE);
            }
        }, 200);

        setInterval(() => {
            if (this.isDead()) {
                this.otherDirection = false;
                this.moveUp();
            } else if (this.y > 10 && !this.otherDirection) {
                this.moveUp();
                if (this.y <= 10) {
                    this.otherDirection = true;
                }
            } else if (this.y <= 450 && this.otherDirection && !this.isDead()) {
                this.moveDown();
                if (this.y >= 450) {
                    this.otherDirection = false;
                }
            }
        }, 1000 / 60);
    }
}


class ElectroJelly extends MovableObject {
    images_IDLE = [
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
    ];
    images_DEAD = [
        './img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        './img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        './img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        './img/2.Enemy/2 Jelly fish/Dead/green/g4.png',
    ];
    height = 70;
    width = 70;
    y = 650;
    offset = {top: 4, bottom: 14, left: 2, right: 4};
    energy = 300;

    /**
     * The constructor is always executed first when the structure is called
     */
    constructor(x){
        super().loadImage('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.images_IDLE);
        this.loadImages(this.images_DEAD);
        this.animate();
        this.speed = 1.15 + Math.random() * 0.25;
        this.x = x;
    }

    /**
     * This function animate the Jellyfish
     */
    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.images_DEAD);
                this.otherDirection = false;
                this.moveUp();
            } else {
                this.playAnimation(this.images_IDLE);
            }
        }, 200);

        setInterval(() => {
            if (this.isDead()) {
                this.otherDirection = false;
                this.moveUp();
            } else if (this.y > 300 && !this.otherDirection) {
                this.moveUp();
                if (this.y <= 300) {
                    this.otherDirection = true;
                }
            } else if (this.y <= 650 && this.otherDirection && !this.isDead()) {
                this.moveDown();
                if (this.y >= 650) {
                    this.otherDirection = false;
                }
            }
        }, 1000 / 60);
    }
}