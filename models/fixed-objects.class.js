class FixedObjects extends DrawableObjects {

    IMAGES_HEALTH = [
        './img/4. Marcadores/orange/0_  copia.png',
        './img/4. Marcadores/orange/10_  copia.png',
        './img/4. Marcadores/orange/20_  copia.png',
        './img/4. Marcadores/orange/30_  copia.png',
        './img/4. Marcadores/orange/40_  copia.png',
        './img/4. Marcadores/orange/50_  copia.png',
        './img/4. Marcadores/orange/60_  copia.png',
        './img/4. Marcadores/orange/70_  copia.png',
        './img/4. Marcadores/orange/80_  copia.png',
        './img/4. Marcadores/orange/100_  copia.png',
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.setPercentage(100);
        this.x = 20;
        this.y = 20;
        this.width = 200;
        this.height = 80;
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        this.path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 9;
        } else if (this.percentage > 80) {
            return 8;
        } else if (this.percentage > 70) {
            return 7;
        } else if (this.percentage > 60) {
            return 6;
        } else if (this.percentage > 50) {
            return 5;
        } else if (this.percentage > 40) {
            return 4;
        } else if (this.percentage > 30) {
            return 3;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 10) {
            return 1;
        } else {
            return 0;
        }
    }
    
}