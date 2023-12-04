class StatusBar extends DrawableObjects {
    IMAGES_HEALTH = [
        './img/4. Marcadores/orange/0_  copia.png',
        './img/4. Marcadores/orange/20_ copia 2.png',
        './img/4. Marcadores/orange/40_  copia.png',
        './img/4. Marcadores/orange/60_  copia.png',
        './img/4. Marcadores/orange/80_  copia.png',
        './img/4. Marcadores/orange/100_  copia.png',
    ];
    percentage = 100;

    /**
     * The constructor is always executed first when the structure is called
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 40;
        this.y = 10;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    /**
     * This function show , how many energy the character have
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        this.path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[this.path];
    }

    /**
     * This function check how energy sharkie have
     * @returns {number}
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
    
}



class PoisenBar extends DrawableObjects {
    IMAGES_Poisen = [
        './img/4. Marcadores/orange/0_ copia.png',
        './img/4. Marcadores/orange/20_ copia.png',
        './img/4. Marcadores/orange/40_ copia.png',
        './img/4. Marcadores/orange/60_ copia.png',
        './img/4. Marcadores/orange/80_ copia.png',
        './img/4. Marcadores/orange/100_ copia.png',
    ];
    percentagePoisen = 0;

    /**
     * The constructor is always executed first when the structure is called
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_Poisen);
        this.x = 40;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    /**
     * This function show, how many Poisen Bottles you collected
     * 
     * @param {number} percentagePoisen 
     */
    setPercentage(percentagePoisen) {
        this.percentagePoisen = percentagePoisen;
        this.path = this.IMAGES_Poisen[this.resolveImageIndex()];
        this.img = this.imageCache[this.path];
    }

    /**
     * This function check, how many Poisens you collected
     * @returns {number}
     */
    resolveImageIndex() {
        if (this.percentagePoisen >= 100) {
            return 5;
        } else if (this.percentagePoisen > 80) {
            return 4;
        } else if (this.percentagePoisen > 60) {
            return 3;
        } else if (this.percentagePoisen > 40) {
            return 2;
        } else if (this.percentagePoisen > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}



class CoinBar extends DrawableObjects {
    IMAGES_COINS = [
        './img/4. Marcadores/orange/0_  copia 2.png',
        './img/4. Marcadores/orange/20_  copia.png',
        './img/4. Marcadores/orange/40_  copia 2.png',
        './img/4. Marcadores/orange/60_  copia 2.png',
        './img/4. Marcadores/orange/80_  copia 2.png',
        './img/4. Marcadores/orange/100_ copia 2.png',
    ];
    percentageCoins = 0;

    /**
     * The constructor is always executed first when the structure is called
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.x = 40;
        this.y = 90;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    /**
     * This function show, how many Coins you collected
     * 
     * @param {number} percentageCoins 
     */
    setPercentage(percentageCoins) {
        this.percentageCoins = percentageCoins;
        this.path = this.IMAGES_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[this.path];
    }

    /**
     * This function check, how many Coins you collected
     * @returns {number}
     */
    resolveImageIndex() {
        if (this.percentageCoins >= 100) {
            return 5;
        } else if (this.percentageCoins > 80) {
            return 4;
        } else if (this.percentageCoins > 60) {
            return 3;
        } else if (this.percentageCoins > 40) {
            return 2;
        } else if (this.percentageCoins > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}