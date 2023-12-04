class World {
    character = new Character();
    level = level1;
    lights = [new Light(),];
    barriers = [new BarrierBlock(-920, 10, 1000), new Stone(-1500, -100, 800, 500), new Stone(-1650, 50, 800, 500), new Stone(-1300, 400, 800, 500), new Hole(-900, 0, 900, 700), new BarrierBlock(1300, 300, 450), new Hole(1400, 300, 600, 500), new Stone(1400, 200, 600, 200)];
    coins = [new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(),];
    poisens = [new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(),];
    finalBoss = [new BigBoss,];
    waters = [new Water('./img/3. Background/Layers/5. Water/L2.png', -1024), new Water('./img/3. Background/Layers/5. Water/L1.png', -2), new Water('./img/3. Background/Layers/5. Water/L2.png', 1020), new Water('./img/3. Background/Layers/5. Water/L1.png', 2042), new Water('./img/3. Background/Layers/5. Water/L2.png', 3064), new Water('./img/3. Background/Layers/5. Water/L1.png', 4086), new Water('./img/3. Background/Layers/5. Water/L2.png', 5108), new Water('./img/3. Background/Layers/5. Water/L1.png', 6130), new Water('./img/3. Background/Layers/5. Water/L2.png', 7152), new Water('./img/3. Background/Layers/5. Water/L1.png', 8174), new Water('./img/3. Background/Layers/5. Water/L2.png', 9196), new Water('./img/3. Background/Layers/5. Water/L1.png', 10218), new Water('./img/3. Background/Layers/5. Water/L2.png', 11240),];
    backgroundShadows = [new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', -1024, 740, 2), new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/L2.png', 0, 740, 2), new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/L1.png', 1024, 740, 2), new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', 2048, 740, 2), new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/L1.png', 3072, 740, 2), new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/D2.png', -1024, 768, 1), new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 0, 768, 1), new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 1024, 768, 1), new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 2048, 768, 1), new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 3072, 768, 1),];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    attackingObjects = [];
    dead;
    statusBar = new StatusBar();
    poisenBar = new PoisenBar();
    coinBar = new CoinBar();
    coinCollected_Sound = new Audio('sounds/coin.mp3');
    bottleCollected_Sound = new Audio('sounds/bottle.mp3');
    immortal = false;
    pushMovement = false;
    /**
     * @typedef {object} character
     * @typedef {object} lights
     * @typedef {object} barriers
     * @typedef {object} coins
     * @typedef {object} poisens
     * @typedef {object} finalBoss
     * @typedef {object} waters
     * @typedef {object} backgroundShadows
     * @param {*} canvas 
     * @param {*} keyboard 
     * @param {*} ctx
     * @param {number} camera_x
     * @param {Array} attackingObjects
     * @param {boolean} dead
     * @typedef {object} statusBar
     * @typedef {object} poisenBar
     * @typedef {object} coinBar
     * @param {sound} coinCollected_Sound
     * @param {sound} bottleCollected_Sound
     * @param {boolean} immortal
     * @param {boolean} pushMovement
     */

    /**
     * The constructor is always executed first when the structure is called
     */
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkGame();
    }

    /**
     * Share world Data with models
     */
    setWorld() {
        this.character.world = this;
        this.finalBoss[0].world = this;
        this.lights[0].world = this;
        this.backgroundShadows.forEach(element => {element.world = this;});
        this.waters.forEach(element => {element.world = this;});
    }

/**
 * Check some Game Functions
 */
    checkGame() {
        setInterval(() =>{
            this.checkCollisionWithEnemies();
            this.checkCollisionWithFinalBoss();
            this.checkPoisenAtkCollidingWithEnemy();
            this.checkCollectedPoisenBottles();
        }, 200)
    }

/**
 * Check Collision with Enemie
 * @param {object} enemy Data from Enemy who collides with the character
 * @param {number} index id number from enemy who collides with the character
 * @param {DataTransfer} bubble Data from bubble
 * @param {number} i id number from the bubble who collides with a enemy
 */
    checkCollisionWithEnemies() {
        this.level.enemies.forEach( (enemy, index) => {
            if (this.immortal && this.character.isColliding(enemy) && !(enemy instanceof JellyFish) && !(enemy instanceof ElectroJelly)) {
                this.character.slapAttack(enemy);
            } else if(this.character.isColliding(enemy) && enemy.energy >= 1) {
                this.character.hit(enemy);
                this.statusBar.setPercentage(this.character.energy);
            }
            this.attackingObjects.forEach( (bubble, i) => this.decreaseEnergyOffHittedEnemys(enemy, bubble, i));
            if (enemy.y <= -500) {
                this.level.enemies.splice(index, 1);
            }
        })
    }

    /**
     * Check Collision with Final Enemy
     * @typedef {object} bubble
     * @param {number} i 
     */
    checkCollisionWithFinalBoss() {
        if(this.character.isColliding(this.finalBoss[0]) && this.finalBoss[0].energy >= 1) {
            this.character.hit(this.finalBoss[0]);
            this.statusBar.setPercentage(this.character.energy);
        }
        this.attackingObjects.forEach( (bubble, i) => this.decreaseEnergyOffHittedEnemys(this.finalBoss[0], bubble, i));
    }

    /**
     * Check which Poisenbottle you collect
     * @typedef {object} obt
     */
    checkCollectedPoisenBottles() {
        this.coins.forEach( (obt) => {
            if (this.character.isColliding(obt)) {
                this.character.isCollectCoin();
                this.coinBar.setPercentage(this.character.myCoins);
                this.filterCoinsArray(obt);
                if (audioOn) {
                    this.coinCollected_Sound.play();
                }
            }
        })
    }

    /**
     * Check if Poisen Attack colliding with Enemy
     */
    checkPoisenAtkCollidingWithEnemy() {
        this.poisens.forEach( (obt) => {
            if (this.character.isColliding(obt)) {
                this.character.isCollectPoisen();
                this.poisenBar.setPercentage(this.character.myPoisens);
                this.filterPoisenArray(obt);
                if (audioOn) {
                    this.bottleCollected_Sound.play();
                }
            }
        })
    }

    /**
     * Check which enemy Colliding with Bubble Attack and decrease his energy
     * 
     * @param {object} enemy 
     * @param {object} bubble 
     * @param {number} i 
     */
    decreaseEnergyOffHittedEnemys(enemy, bubble, i) {
        if (enemy.isColliding(bubble)) {
            this.attackingObjects.splice(i, 1);
            if (enemy instanceof JellyFish) {
                enemy.energy -= 101;
            }
            if (enemy instanceof ElectroJelly) {
                enemy.energy -= 101;
            }
            if (enemy instanceof BigBoss) {
                enemy.energy -= 101;
            }
            if (bubble instanceof PoisenAttack && enemy instanceof BigBoss) {
                enemy.energy -= 1500;
                enemy.isHurt = true;
            }
            if (bubble instanceof PoisenAttack && enemy instanceof ElectroJelly) {
                enemy.energy -= 1500;
            }
        }
    }

    /**
     * This function delete the Collected Poisen from Array
     * @param {object} obt 
     */
    filterPoisenArray(obt) {
        let poisenIndex = this.poisens.indexOf(obt);
        this.poisens.splice(poisenIndex, 1);
    }

    /**
     * This function delete the Collected Coins from Array
     * @param {object} obt 
     */
    filterCoinsArray(obt) {
        let coinIndex = this.coins.indexOf(obt);
        this.coins.splice(coinIndex, 1);
    }

    /**
     * This function make the shark immortal for the length of the slap attack
     */
    finSlap() {
        clearTimeout(this.immortalTimeout);
        this.immortal = true;
        this.immortalTimeout = setTimeout(() => {
            this.immortal = false;
        }, 400);
    }


    /**
     * This function draw all Objects in the Canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.waters);
        this.addObjectsToMap(this.backgroundShadows);
        this.addObjectsToMap(this.barriers);
        this.addObjectsToMap(this.level.ground);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.finalBoss);
        this.addObjectsToMap(this.coins);
        this.addObjectsToMap(this.poisens);
        this.ctx.translate(-this.camera_x, 0); //back
        this.addToMap(this.statusBar);
        this.addToMap(this.poisenBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0); // forwards
        this.addToMap(this.character);
        this.addObjectsToMap(this.attackingObjects);
        this.addObjectsToMap(this.lights);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    };

    /**
     * This function add the object to Map
     * 
     * @param {object} objects 
     */
    addObjectsToMap(objects){
        objects.forEach(ob => {
            this.addToMap(ob);
        });
    };

    /**
     * This function add the Characters to the map
     * 
     * @param {object} char 
     */
    addToMap(char) {
        if(char.otherDirection) {
            this.flipImage(char);
        }
        char.draw(this.ctx);
        char.drawCollisionFrame(this.ctx);
        if(char.otherDirection) {
            this.flipImageBack(char);
        }
    };
    
    /**
     * This function flip the Characters to the other direction
     * @param {object} char 
     */
    flipImage(char) {
        this.ctx.save();
        this.ctx.translate(char.width, 0);
        this.ctx.scale(-1, 1);
        char.x = char.x * -1;
    }

    /**
     * This function flip the Characters to her normally directions
     * 
     * @param {object} char 
     */
    flipImageBack(char) {
        char.x = char.x * -1;
        this.ctx.restore();
    }
    
}