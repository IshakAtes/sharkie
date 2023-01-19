class World {
    character = new Character();
    enemies = [new PufferFish(), new JellyFish(), new BigBoss(),];
    lights = [new Light(),];
    barriers = [new BarrierBlock(),];
    ground = [
        new Floor('./img/3. Background/Layers/2. Floor/L2.png', -1100, 180),
        new Floor('./img/3. Background/Layers/2. Floor/L1.png', 0, 180),
        new Floor('./img/3. Background/Layers/2. Floor/L2.png', 1100, 180),
        new Floor('./img/3. Background/Layers/2. Floor/L1.png', 2200, 180),
    ];
    water = [
        new Water('./img/3. Background/Layers/5. Water/L2.png', -1100),
        new Water('./img/3. Background/Layers/5. Water/L1.png', 0),
        new Water('./img/3. Background/Layers/5. Water/L2.png', 1100),
        new Water('./img/3. Background/Layers/5. Water/L1.png', 2200),
    ];
    bgShadow = [
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', -1100),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L1.png', -1100),
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 0),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L1.png', 0),
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', 1100),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', 1100),
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 2200),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', 2200),
    ];
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