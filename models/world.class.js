class World {
    character = new Character();
    level = level1;
    lights = [new Light(),];
    barriers = [new BarrierBlock(),];
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
    immortal = false;


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
    }


    checkGame() {
        setInterval(() =>{
            this.level.enemies.forEach( (enemy, index) => {
                if (this.immortal && this.character.isColliding(enemy)) {
                    console.log('Kill the Enemy');
                } else if(this.character.isColliding(enemy) && !this.immortal) {
                    // console.log('Collision with Character ', enemy);
                    this.character.hit();
                    // console.log('Character Energy', this.character.energy);
                    this.statusBar.setPercentage(this.character.energy);
                    // if (this.character.energy <= 0) {
                    //     this.dead = true;
                    //     this.character.playAnimation(this.character.images_DEAD);
                    // } else {
                    //     this.dead = false;
                    // }
                }
                this.attackingObjects.forEach( (bubble, i) => {
                    if (enemy.isColliding(bubble)) {
                        this.attackingObjects.splice(i, 1);
                        if (enemy instanceof JellyFish) {
                            enemy.energy -= 101;
                        }
                    }
                })
                if (enemy.y <= -500) {
                    // Remove the enemy from the array
                    this.level.enemies.splice(index, 1);
                    console.log(this.level.enemies)
                }
            })

            this.poisens.forEach( (obt) => {
                if (this.character.isColliding(obt)) {
                    this.character.isCollectPoisen();
                    this.poisenBar.setPercentage(this.character.myPoisens);
                    this.filterPoisenArray(obt);
                }
            })

            this.coins.forEach( (obt) => {
                if (this.character.isColliding(obt)) {
                    this.character.isCollectCoin();
                    this.coinBar.setPercentage(this.character.myCoins);
                    this.coinCollected_Sound.play();
                    this.filterCoinsArray(obt);
                }
            })
        }, 200)
    }


    filterPoisenArray(obt) {
        let poisenIndex = this.poisens.indexOf(obt);
        this.poisens.splice(poisenIndex, 1);
    }

    filterCoinsArray(obt) {
        let coinIndex = this.coins.indexOf(obt);
        this.coins.splice(coinIndex, 1);
    }


    // finSlap() {
    //     if (this.keyboard.V) {
    //         clearTimeout(this.immortalTimeout); // Timer zurücksetzen, falls er bereits läuft
    //         this.immortal = true;
    //         this.immortalTimeout = setTimeout(() => {
    //             this.immortal = false; // Immunität nach 2 Sekunden deaktivieren
    //         }, 2000);
    //     }
    // }



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

        // Draw() wird immer wieder aufgerufen. "this" funktioniert in einer normalen Funktion nicht mehr, deshalb übergeben wir "this" an eine Variable "let self" um sie dann in der Funktion anwenden zukönnen.
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