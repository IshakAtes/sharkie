class Character extends MovableObject {
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
    speed = 8; //make it 8 if game finish
    gameOver = false;
    wonTheGame = false;
    swimming_Sound = new Audio('sounds/swimmingFish.mp3');
    gameOver_Sound = new Audio('sounds/loose.mp3');
    stopMoveRight = false;
    stopMoveLeft = false;
    stopMoveUp = false;
    stopMoveDown = false;
    offset = {top: 68, bottom: 99, left: 30, right: 58};


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
        setInterval(() => this.playCharacter(), 100);
        setInterval(() => this.moveCharacter(), 30);
    }


    playCharacter() {
        this.swimming_Sound.pause();
        if (this.gameOver) {
            this.gameIsOver();
        } else if (this.isDead()) {
            this.characterIsDead();
        } else if(this.isHurt()) {
            this.playAnimation(this.images_HURT);
        } else if (this.poisenBubbleAttackActive) {
            this.AttackWithPoisen();
        } else if (this.bubbleAttackActive) {
            this.BubbleAttack();
        } else if (this.finslap) {
            this.characterFinslap();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
            this.swimAnimation();
        } else {
            this.playAnimation(this.images_IDLE);
        }
    }

    swimAnimation() {
        this.playAnimation(this.images_SWIM);
        if (audioOn) {
            this.swimming_Sound.play();
        }
    }

    characterFinslap() {
        this.playAnimation(this.images_FINSLAP);
        this.world.finSlap();
        setTimeout(() => {
            this.finslap = false;
        }, this.images_FINSLAP.length * 100);
    }

    BubbleAttack() {
        this.playAnimation(this.images_BUBBLE);
        if (!this.bubbleAnimationInProgress) {
            this.bubbleAnimationInProgress = true;
            setTimeout(() => {
                this.drawBubble();
                this.bubbleAnimationInProgress = false; // Markiere die Bubble-Animation als abgeschlossen
                this.bubbleAttackActive = false;
            }, this.images_BUBBLE.length * 95); // Hier wird die Dauer der Bubble-Animation verwendet
        }
    }

    AttackWithPoisen() {
        this.playAnimation(this.images_POISENBUBBLE);
        if (!this.bubbleAnimationInProgress) {
            this.bubbleAnimationInProgress = true;
            setTimeout(() => {
                this.drawPoisenBubble();
                this.bubbleAnimationInProgress = false; // Markiere die Bubble-Animation als abgeschlossen
                this.poisenBubbleAttackActive = false;
            }, this.images_POISENBUBBLE.length * 100); // Hier wird die Dauer der Bubble-Animation verwendet
        }
    }

    characterIsDead() {
        this.playAnimation(this.images_DEAD);
            setTimeout(() => {
                this.gameOver = true;
                setTimeout(() => {
                    if (audioOn) {
                        this.gameOver_Sound.play();
                    }
                }, 1000);
            }, this.images_DEAD.length * 100);
    }

    gameIsOver() {
        let gameOverScreen = document.getElementById('gameOverOverlay');
            this.playAnimation(this.images_GAMEOVER);
            this.moveUp();
            setTimeout(() => {
                this.gameOver_Sound.pause();
            }, 6000);
            setTimeout(() => {
                gameOverScreen.style.display = 'flex';
                if (window.innerHeight < 930 && window.innerWidth > 1024) {
                    gameOverScreen.style.top = '20px';
                }
            }, 2000);
    }


    
    moveCharacter() {
        if (!this.stopMoveRight && !this.wonTheGame && !this.gameOver && this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
        }
        if (!this.stopMoveLeft && !this.wonTheGame && !this.gameOver && this.world.keyboard.LEFT && this.x > -814) {
            this.moveLeft();
            this.otherDirection = true; 
        }
        this.world.camera_x = -this.x + 200;
        if (!this.stopMoveUp && !this.wonTheGame && !this.gameOver && this.world.keyboard.UP && this.y > -40) {
            this.moveUp();
        }
        if (!this.stopMoveDown && !this.wonTheGame && !this.gameOver && this.world.keyboard.DOWN && this.y < 600) {
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
    }

}