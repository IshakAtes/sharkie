class Character extends MovableObject {
    // x = 150;
    speed = 8; //make it 8 if game finish
    gameOver = false;
    wonTheGame = false;
    images_IDLE = [
        './img/1.Sharkie/1.IDLE/1.png',
        './img/1.Sharkie/1.IDLE/2.png',
        './img/1.Sharkie/1.IDLE/3.png',
        './img/1.Sharkie/1.IDLE/4.png',
        './img/1.Sharkie/1.IDLE/5.png',
        './img/1.Sharkie/1.IDLE/6.png',
        './img/1.Sharkie/1.IDLE/7.png',
        './img/1.Sharkie/1.IDLE/8.png',
        './img/1.Sharkie/1.IDLE/9.png',
        './img/1.Sharkie/1.IDLE/10.png',
        './img/1.Sharkie/1.IDLE/11.png',
        './img/1.Sharkie/1.IDLE/12.png',
        './img/1.Sharkie/1.IDLE/13.png',
        './img/1.Sharkie/1.IDLE/14.png',
        './img/1.Sharkie/1.IDLE/15.png',
        './img/1.Sharkie/1.IDLE/16.png',
        './img/1.Sharkie/1.IDLE/17.png',
        './img/1.Sharkie/1.IDLE/18.png',
    ];
    images_GAMEOVER = [
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png',
    ];
    images_DEAD = [
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png',
    ];
    images_HURT = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];
    images_SWIM = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png',
    ];
    images_BUBBLE = [
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];
    images_POISENBUBBLE = [
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ];
    images_FINSLAP = [
        './img/1.Sharkie/4.Attack/Fin slap/1.png',
        './img/1.Sharkie/4.Attack/Fin slap/2.png',
        './img/1.Sharkie/4.Attack/Fin slap/3.png',
        './img/1.Sharkie/4.Attack/Fin slap/4.png',
        './img/1.Sharkie/4.Attack/Fin slap/5.png',
        './img/1.Sharkie/4.Attack/Fin slap/6.png',
        './img/1.Sharkie/4.Attack/Fin slap/7.png',
        './img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];
    world;
    swimming_Sound = new Audio('sounds/swimmingFish.mp3');
    gameOver_Sound = new Audio('sounds/loose.mp3');


    constructor(){
        super().loadImage('./img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.images_IDLE);
        this.loadImages(this.images_GAMEOVER);
        this.loadImages(this.images_DEAD);
        this.loadImages(this.images_HURT);
        this.loadImages(this.images_SWIM);
        this.loadImages(this.images_POISENBUBBLE);
        this.loadImages(this.images_BUBBLE);
        this.loadImages(this.images_FINSLAP);
        this.bubbleAttackInProgress = false;
        this.animate();
    }


    animate() {

        setInterval(() => {
            this.swimming_Sound.pause();
            
            if (this.gameOver) {
                let gameOverScreen = document.getElementById('gameOverOverlay');
                this.playAnimation(this.images_GAMEOVER);
                this.moveUp();
                setTimeout(() => {
                    this.gameOver_Sound.pause();
                }, 6000);
                setTimeout(() => {
                    console.log('GameOverScreen');
                    gameOverScreen.style.display = 'flex';
                }, 2000);
            } else if (this.isDead()) {
                this.playAnimation(this.images_DEAD);
                setTimeout(() => {
                    this.gameOver = true;
                    setTimeout(() => {
                        this.gameOver_Sound.play();
                    }, 1000);
                }, this.images_DEAD.length * 100);
            } else if(this.isHurt()) {
                this.playAnimation(this.images_HURT);
            } else if (this.poisenBubbleAttackActive) {
                // Poisen Attack
                this.playAnimation(this.images_POISENBUBBLE);
                // this.poisenAttack();
                if (!this.bubbleAnimationInProgress) {
                    this.bubbleAnimationInProgress = true;
                    setTimeout(() => {
                        this.drawPoisenBubble();
                        this.bubbleAnimationInProgress = false; // Markiere die Bubble-Animation als abgeschlossen
                        this.poisenBubbleAttackActive = false;
                    }, this.images_POISENBUBBLE.length * 100); // Hier wird die Dauer der Bubble-Animation verwendet
                }
            } else if (this.bubbleAttackActive) {
                // Bubble Attack
                this.playAnimation(this.images_BUBBLE);
                if (!this.bubbleAnimationInProgress) {
                    this.bubbleAnimationInProgress = true;
                    setTimeout(() => {
                        this.drawBubble();
                        this.bubbleAnimationInProgress = false; // Markiere die Bubble-Animation als abgeschlossen
                        this.bubbleAttackActive = false;
                    }, this.images_BUBBLE.length * 95); // Hier wird die Dauer der Bubble-Animation verwendet
                }
            } else if (this.finslap) {
                //FinSlap
                this.playAnimation(this.images_FINSLAP);
                this.world.finSlap();
                setTimeout(() => {
                    this.finslap = false;
                }, this.images_FINSLAP.length * 100);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                // Swimm Animation
                this.playAnimation(this.images_SWIM);
                this.swimming_Sound.play();
            } else {
                this.playAnimation(this.images_IDLE);
            }
        }, 100);


        // gameOverSection() {
        //     i = 0;
        //     this.gameOver = true;
        // };


        setInterval(() => {
            if (!this.wonTheGame && !this.gameOver && this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (!this.wonTheGame && !this.gameOver && this.world.keyboard.LEFT && this.x > -814) {
                this.moveLeft();
                this.otherDirection = true; 
            }
            this.world.camera_x = -this.x + 200;
            if (!this.wonTheGame && !this.gameOver && this.world.keyboard.UP) {
                this.moveUp();
            }
            if (!this.wonTheGame && !this.gameOver && this.world.keyboard.DOWN) {
                this.moveDown();
            }
            if (!this.wonTheGame && this.world.keyboard.SPACE) {
                this.attackWithBubble();
            }
            if (!this.wonTheGame && this.world.keyboard.B) {
                this.attackWithPoisenBubble();
            }
            if (!this.wonTheGame && this.world.keyboard.V) {
                this.attackWithFinslap();
            }
        }, 30);

    }

}