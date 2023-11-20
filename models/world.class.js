class World {
    character = new Character();
    level = level1;
    lights = [new Light(),];
    barriers = [new BarrierBlock(-920, 10, 1000), new Stone(-1500, -100, 800, 500), new Stone(-1650, 50, 800, 500), new Stone(-1300, 400, 800, 500), new Hole(-900, 0, 900, 700), new BarrierBlock(1300, 300, 450), new Hole(1400, 300, 600, 500), new Stone(1400, 200, 600, 200)];
    coins = [new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin(),];
    poisens = [new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(), new Poisen(),];
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


    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkGame();
    }

    setWorld() {
        this.character.world = this;
        this.level.enemies[12].world = this;
    }


    checkGame() {
        setInterval(() =>{
            this.level.enemies.forEach( (enemy, index) => {
                if (this.immortal && this.character.isColliding(enemy) && !(enemy instanceof JellyFish)) {
                    this.character.slapAttack(enemy);
                } else if(this.character.isColliding(enemy) && enemy.energy >= 1) {
                    this.character.hit(enemy);
                    this.statusBar.setPercentage(this.character.energy);
                }
                this.attackingObjects.forEach( (bubble, i) => this.decreaseEnergyOffHittedEnemys(enemy, bubble, i));
                if (enemy.y <= -500) {
                    // Remove the enemy from the array
                    this.level.enemies.splice(index, 1);
                }
            })
            this.checkPoisenAtkCollidingWithEnemy();
            this.checkCollectedPoisenBottles();
        }, 200)
    }

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

    decreaseEnergyOffHittedEnemys(enemy, bubble, i) {
        if (enemy.isColliding(bubble)) {
            this.attackingObjects.splice(i, 1);
            if (enemy instanceof JellyFish) {
                enemy.energy -= 101;
            }
            if (enemy instanceof ElectroJelly) {
                enemy.energy -= 101;
            }
            if (bubble instanceof PoisenAttack && enemy instanceof ElectroJelly) {
                enemy.energy -= 1500;
            }
            if (enemy instanceof BigBoss) {
                enemy.energy -= 101;
            }
            if (bubble instanceof PoisenAttack && enemy instanceof BigBoss) {
                enemy.energy -= 1500;
                enemy.isHurt = true;
            }
        }
    }

    filterPoisenArray(obt) {
        let poisenIndex = this.poisens.indexOf(obt);
        this.poisens.splice(poisenIndex, 1);
    }

    filterCoinsArray(obt) {
        let coinIndex = this.coins.indexOf(obt);
        this.coins.splice(coinIndex, 1);
    }

    finSlap() {
        clearTimeout(this.immortalTimeout); // Timer zurücksetzen, falls er bereits läuft
        this.immortal = true;
        this.immortalTimeout = setTimeout(() => {
            this.immortal = false; // Immunität nach 0,6 Sekunde deaktivieren
        }, 600);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.water);
        this.addObjectsToMap(this.level.bgShadow);
        this.addObjectsToMap(this.barriers);
        this.addObjectsToMap(this.level.ground);
        this.addObjectsToMap(this.level.enemies);
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

    addObjectsToMap(objects){
        objects.forEach(ob => {
            this.addToMap(ob);
        });
    };

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
    
    flipImage(char) {
        this.ctx.save();
        this.ctx.translate(char.width, 0);
        this.ctx.scale(-1, 1);
        char.x = char.x * -1;
    }

    flipImageBack(char) {
        char.x = char.x * -1;
        this.ctx.restore();
    }
    
}