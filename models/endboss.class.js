class BigBoss extends MovableObject {
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
    width = 400;
    height = 300;
    energy = 10000;
    firstContact = false;
    EnemyTrackingActive = false;
    deadAnimationCompelete = false;
    isHurt = false;
    offset = {top: 140, bottom: 200, left: 12, right: 40};
    gameWin_Sound = new Audio('sounds/win.mp3');
    endBoss_Sound = new Audio('./sounds/trailer.mp3')
    deathAnimationPlayed = false; // Eine Variable, um zu verfolgen, ob die Tod-Animation bereits abgespielt wurde


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
        setInterval(() => {
            this.world.level.enemies.forEach(boss => {
                if (boss instanceof BigBoss) {
                    if (i < 9) {
                        this.playAnimation(this.images_SPAWNING);
                    } else if (this.deathAnimationPlayed) {
                        this.gameIsFinished();
                    } else if (this.isDead()) {
                        this.endBossIsDead();
                    } else if (this.isHurt) {
                        this.endBossIsHurt();
                    } else if (!this.isDead() && this.world.character.x >= boss.x - 150 && this.world.character.x <= boss.x + 400) {
                        this.playAnimation(this.images_ATTACK);
                    } else if (!this.isDead()) {
                        this.playAnimation(this.images_IDLE);
                    }
                    i++;
            
                    if (this.world.character.x > 1700 && !this.firstContact) {
                        this.firstContact = true;
                        setTimeout(() => {
                            this.y = -20;
                            this.x = 2700;
                            i = 0;
                            if (audioOn) {
                                this.endBoss_Sound.play();
                            }
                            setTimeout(() => {
                                this.EnemyTrackingActive = true;
                            }, 3000);
                        }, 4000);
                    }

                    if (this.EnemyTrackingActive && !this.deathAnimationPlayed) {
                        this.enemyTrackingX(this.x);
                        this.enemyTrackingY(this.y);
                    }
                }
            });
        }, 200);
    }


    endBossIsHurt() {
        this.playAnimation(this.images_HURT);
        setTimeout(() => {
            this.isHurt = false;
        }, this.images_HURT.length * 200);
    }

    endBossIsDead() {
        this.playAnimation(this.images_DEAD);
        setTimeout(() => {
            this.endBoss_Sound.pause();
            this.deathAnimationPlayed = true; // Markiere, dass die Tod-Animation bereits abgespielt wurde
            if (audioOn) {
                this.gameWin_Sound.play();
            }
            // GameWin Screen
        }, this.images_DEAD.length * 140);
    }

    gameIsFinished() {
        this.world.character.wonTheGame = true;
        let winningScreen = document.getElementById('winningOverlay');
        this.playAnimation(this.images_PARADISE);
        this.y = this.y -= 3;
        setTimeout(() => {
            winningScreen.style.display = 'flex';
            winningScreen.style.backgroundColor = 'rgb(0, 0, 0)';                            
        }, 4000);
        setTimeout(() => {
            this.gameWin_Sound.pause();                            
        }, 6000);
    }
}