class World {
    character = new Character();
    enemies = [new PufferFish(), new JellyFish(), new BigBoss(),];
    lights = [new Light(),];
    barriers = [new BarrierBlock(),];
    ground = [new Floor(),];
    water = [new Water()];
    bgShadow = [
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 0, 140),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L1.png', 0, 180),
    ];
    canvas;
    ctx;
    keyboard;


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
        this.addObjectsToMap(this.water);
        this.addObjectsToMap(this.bgShadow);
        this.addObjectsToMap(this.barriers);
        this.addObjectsToMap(this.ground);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.lights);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

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


    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    };
}