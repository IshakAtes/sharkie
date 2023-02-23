const level1 = new Level(
    [
        new PufferFish(),
        new JellyFish(),
        new BigBoss(),
    ],
    [
        new Floor('./img/3. Background/Layers/2. Floor/L2.png', -1024, 269),
        new Floor('./img/3. Background/Layers/2. Floor/L1.png', 0, 269),
        new Floor('./img/3. Background/Layers/2. Floor/L2.png', 1024, 269),
        new Floor('./img/3. Background/Layers/2. Floor/L1.png', 2048, 269),
    ],
    [
        new Water('./img/3. Background/Layers/5. Water/L2.png', -1024),
        new Water('./img/3. Background/Layers/5. Water/L1.png', 0),
        new Water('./img/3. Background/Layers/5. Water/L2.png', 1024),
        new Water('./img/3. Background/Layers/5. Water/L1.png', 2048),
    ],
    [
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', -1024),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', -1024),
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 0),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L1.png', 0),
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', 1024),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', 1024),
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 2048),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', 2048),
    ],
)