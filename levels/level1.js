const level1 = new Level(
    [
        new PufferFish(),
        new JellyFish(),
        new BigBoss(),
    ],
    [
        new Floor('./img/3. Background/Layers/2. Floor/L2.png', -1100, 180),
        new Floor('./img/3. Background/Layers/2. Floor/L1.png', 0, 180),
        new Floor('./img/3. Background/Layers/2. Floor/L2.png', 1100, 180),
        new Floor('./img/3. Background/Layers/2. Floor/L1.png', 2200, 180),
    ],
    [
        new Water('./img/3. Background/Layers/5. Water/L2.png', -1100),
        new Water('./img/3. Background/Layers/5. Water/L1.png', 0),
        new Water('./img/3. Background/Layers/5. Water/L2.png', 1100),
        new Water('./img/3. Background/Layers/5. Water/L1.png', 2200),
    ],
    [
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', -1100),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', -1100),
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 0),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L1.png', 0),
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', 1100),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', 1100),
        new BackgroundObject('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 2200),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', 2200),
    ],
)