const level1 = new Level(
    [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new ElectroJelly(1500),
        new ElectroJelly(1600),
        new ElectroJelly(1700),
    ],
    [
        new Floor('./img/3. Background/Layers/2. Floor/L2.png', -1024),
        new Floor('./img/3. Background/Layers/2. Floor/L1.png', 0),
        new Floor('./img/3. Background/Layers/2. Floor/L2.png', 1024),
        new Floor('./img/3. Background/Layers/2. Floor/L1.png', 2048),
    ],
    [
        new Water('./img/3. Background/Layers/5. Water/L2.png', -1024),
        new Water('./img/3. Background/Layers/5. Water/L1.png', 0),
        new Water('./img/3. Background/Layers/5. Water/L2.png', 1024),
        new Water('./img/3. Background/Layers/5. Water/L1.png', 2048),
    ],
    [
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', -1024, 740, 2),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/L2.png', 0, 740, 2),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/L1.png', 1024, 740, 2),
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', 2048, 740, 2),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/L1.png', 3072, 740, 2),
        // blau
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/D2.png', -1024, 768, 1),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 0, 768, 1),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 1024, 768, 1),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 2048, 768, 1),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 3072, 768, 1),
        //lila
    ],
)