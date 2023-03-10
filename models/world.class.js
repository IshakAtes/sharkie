class World {
    character = new Character();
    level = level1;
    lights = [new Light(),];
    barriers = [new BarrierBlock(),];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    attackingObjects = [];
    dead;


    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.runGame();
    }

    setWorld() {
        this.character.world = this;
    }


    runGame() {
        setInterval(() => {
            this.checkAttackingObjects();
        }, 100);
        setInterval(() =>{
            this.level.enemies.forEach( (enemy) => {
                if(this.character.isColliding(enemy) ) {
                    console.log('Collision with Character ', enemy);
                    this.character.hit();
                    console.log('Character Energy', this.character.energy);
                    // if (this.character.energy <= 0) {
                    //     this.dead = true;
                    //     this.character.playAnimation(this.character.images_DEAD);
                    // } else {
                    //     this.dead = false;
                    // }
                }
            })
        }, 200)
    }

    checkAttackingObjects() {
        if(this.keyboard.V) {
            let bubble = new AttackObject(this.character.x + 122, this.character.y + 60); //112, 72
            this.attackingObjects.push(bubble);
        };
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.water);
        this.addObjectsToMap(this.level.bgShadow);
        this.addObjectsToMap(this.barriers);
        this.addObjectsToMap(this.level.ground);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addObjectsToMap(this.attackingObjects);
        this.addObjectsToMap(this.lights);
        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder aufgerufen. "this" funktioniert in einer normalen Funktion nicht mehr, deshalb ??bergeben wir "this" an eine Variable "let self" um sie dann in der Funktion anwenden zuk??nnen.
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