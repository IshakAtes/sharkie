class BigBoss extends MovableObject {
    width = 400;
    height = 300;
    energy = 10000;
    firstContact = false;
    EnemyTrackingActive = false;
    deadAnimationCompelete = false;
    isHurt = false;
    
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
    images_HURT = [
        './img/2.Enemy/3 Final Enemy/Hurt/1.png',
        './img/2.Enemy/3 Final Enemy/Hurt/2.png',
        './img/2.Enemy/3 Final Enemy/Hurt/3.png',
        './img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];
    images_DEAD = [
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];
    images_PARADISE = [
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];
    world;


    constructor(){
        super().loadImage('./img/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.loadImages(this.images_SPAWNING);
        this.loadImages(this.images_IDLE);
        this.loadImages(this.images_ATTACK);
        this.loadImages(this.images_HURT);
        this.loadImages(this.images_DEAD);
        this.loadImages(this.images_PARADISE);
        this.x = 4000;
        this.y = -400;
        this.animate();
    }

    animate() {
        let i = 0;
        let deathAnimationPlayed = false; // Eine Variable, um zu verfolgen, ob die Tod-Animation bereits abgespielt wurde
    
        setInterval(() => {
            if (i < 9) {
                this.playAnimation(this.images_SPAWNING);
            } else if (deathAnimationPlayed) {
                this.playAnimation(this.images_PARADISE);
                this.y = this.y -= 3;
            } else if (this.isDead()) {
                this.playAnimation(this.images_DEAD);
                setTimeout(() => {
                    deathAnimationPlayed = true; // Markiere, dass die Tod-Animation bereits abgespielt wurde
                }, this.images_DEAD.length * 140);
            } else if (this.isHurt) {
                this.playAnimation(this.images_HURT);
                setTimeout(() => {
                    this.isHurt = false;
                }, this.images_HURT.length * 200);
            } else if (!this.isDead() && this.world.character.x >= this.world.level.enemies[12].x - 150 && this.world.character.x <= this.world.level.enemies[12].x + 400) {
                this.playAnimation(this.images_ATTACK);
            } else if (!this.isDead()) {
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
                        this.EnemyTrackingActive = true;
                    }, 3000);
                }, 4000);
            }
    
            if (this.EnemyTrackingActive && !deathAnimationPlayed) {
                this.enemyTrackingX(this.x);
                this.enemyTrackingY(this.y);
            }
        }, 200);
    }


}