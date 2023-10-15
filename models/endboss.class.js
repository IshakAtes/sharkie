class BigBoss extends MovableObject {
    width = 400;
    height = 300;
    energy = 10000;
    firstContact = false;
    images_SPAWNING = [
        './img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];
    images_IDLE = [
        './img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];
    images_ATTACK = [
        './img/2.Enemy/3 Final Enemy/Attack/1.png',
        './img/2.Enemy/3 Final Enemy/Attack/2.png',
        './img/2.Enemy/3 Final Enemy/Attack/3.png',
        './img/2.Enemy/3 Final Enemy/Attack/4.png',
        './img/2.Enemy/3 Final Enemy/Attack/5.png',
        './img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];
    world;


    constructor(){
        super().loadImage('./img/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.loadImages(this.images_SPAWNING);
        this.loadImages(this.images_IDLE);
        this.loadImages(this.images_ATTACK);
        this.x = 4000;
        this.y = -400;
        this.animate();
    }

    animate() {
        let i = 0;
        setInterval(() => {
            if (i < 10) {
                this.playAnimation(this.images_SPAWNING);
            } else if (this.world.character.x >= this.world.level.enemies[12].x - 150) {
                console.log('Attack_Animation');
                this.playAnimation(this.images_ATTACK);                
            } else {
                this.playAnimation(this.images_IDLE);
            }
            i++;

            if (this.world.character.x > 1300 && !this.firstContact) {
                this.firstContact = true;
                setTimeout(() => {
                    this.y = -20;
                    this.x = 2700;
                    i = 0;
                    setTimeout(() => {
                        setInterval(() => {
                            this.enemyTrackingX(this.x);
                            this.enemyTrackingY(this.y);
                        }, 150);
                    }, 3000)
                }, 4000)
            }
        }, 200);
    }


}