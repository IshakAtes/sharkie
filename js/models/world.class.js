class World {
    character = new Character();
    enemies = level1.enemies;
    lights = [new Light(),];
    barriers = [new BarrierBlock(),];
    ground = level1.ground;
    water = level1.water
    bgShadow = level1.bgShadow;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.water);
        this.addObjectsToMap(this.bgShadow);
        this.addObjectsToMap(this.barriers);
        this.addObjectsToMap(this.ground);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.lights);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder aufgerufen
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
            this.ctx.save();
            this.ctx.translate(char.width, 0);
            this.ctx.scale(-1, 1);
            char.x = char.x * -1;
        }
        this.ctx.drawImage(char.img, char.x, char.y, char.width, char.height);
        if(char.otherDirection) {
            char.x = char.x * -1;
            this.ctx.restore();
        }

    };
}