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
    enemyTrackingActive = false;
    deadAnimationCompelete = false;
    isHurt = false;
    offset = {top: 140, bottom: 200, left: 12, right: 40};
    gameWin_Sound = new Audio('sounds/win.mp3');
    endBoss_Sound = new Audio('./sounds/trailer.mp3')
    deathAnimationPlayed = false;
    i = 0;
    /**
     * @typedef {object} world
     * @param {number} width
     * @param {number} height
     * @param {number} energy energy from FinalEnemy
     * @param {boolean} firstContact
     * @param {boolean} enemyTrackingActive activate Enemy tracking
     * @param {boolean} deadAnimationCompelete show if deadAnimation is completed
     * @param {boolean} isHurt
     * @param {object} offset
     * @param {sound} gameWin_Sound Contains the link to the sound file
     * @param {sound}endBoss_Sound Contains the link to the sound file
     * @param {boolean} deathAnimationPlayed
     * @param {number} i
     */

    /**
     * The constructor is always executed first when the structure is called
     */
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

    /**
     * This function set the Intervall, how fast the Final Enemy Animated
     */
    animate() {
        setInterval(() => {
            this.playWhale();
            this.i++;
            this.ContactWithEnemy();
            this.tracking();
        }, 200);
    }

    /**
     * This function Animate the Final Enemy
     */
    playWhale() {
        if (this.i < 9) {
            this.playAnimation(this.images_SPAWNING);
        } else if (this.deathAnimationPlayed) {
            this.gameIsFinished();
        } else if (this.isDead()) {
            this.endBossIsDead();
        } else if (this.isHurt) {
            this.endBossIsHurt();
        } else if (!this.isDead() && this.world.character.x >= this.world.finalBoss[0].x - 150 && this.world.character.x <= this.world.finalBoss[0].x + 400) {
            this.playAnimation(this.images_ATTACK);
        } else if (!this.isDead()) {
            this.playAnimation(this.images_IDLE);
        }
    }


    /**
     * This function check if Sharkie reach the area from Final Enemy
     */
    ContactWithEnemy() {
        if (this.world.character.x > 1700 && !this.firstContact) {
            this.firstContact = true;
            setTimeout(() => {
                this.SpawnEnemyToCordinate();
                setTimeout(() => {
                    this.enemyTrackingActive = true;
                }, 3000);
            }, 4000);
        }
    }

    /**
     * This function Teleport the whale to the right place and play the EndGame Sound
     */
    SpawnEnemyToCordinate() {
        this.y = -20;
        this.x = 2700;
        this.i = 0;
        if (audioOn) {
            this.endBoss_Sound.play();
        }
    }

    /**
     * This function start the tracking from sharkie
     */
    tracking() {
        if (this.enemyTrackingActive && !this.deathAnimationPlayed) {
            this.enemyTrackingX(this.x);
            this.enemyTrackingY(this.y);
        }
    }

    /**
     * This function show if endBoss is Hurt
     */
    endBossIsHurt() {
        this.playAnimation(this.images_HURT);
        setTimeout(() => {
            this.isHurt = false;
        }, this.images_HURT.length * 200);
    }

    /**
     * This function show if EndBoss is dead and play the Game win Sound
     */
    endBossIsDead() {
        this.playAnimation(this.images_DEAD);
        setTimeout(() => {
            this.endBoss_Sound.pause();
            this.deathAnimationPlayed = true; // Markiere, dass die Tod-Animation bereits abgespielt wurde
            if (audioOn) {
                this.gameWin_Sound.play();
            }
        }, this.images_DEAD.length * 140);
    }

    /**
     * This function Show the Whale if he ist dead and play the Winning sound
     */
    gameIsFinished() {
        this.world.character.snoring_Sound.pause();
        this.world.character.wonTheGame = true;
        this.playAnimation(this.images_PARADISE);
        this.y = this.y -= 3;
        this.showWinnerScreen();
        setTimeout(() => {
            this.gameWin_Sound.pause();
        }, 6000);
    }

    /**
     * This function Shows the Game Win screen
     */
    showWinnerScreen() {
        let winningScreen = document.getElementById('winningOverlay');
        setTimeout(() => {
            winningScreen.style.display = 'flex';
            winningScreen.style.backgroundColor = 'rgb(0, 0, 0)';
            // if (window.innerHeight < 930 && window.innerWidth > 1024) {
            //     winningScreen.style.top = '20px';
            // }
        }, 4000);
    }
}