const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#000000',
    scene: [ Controller, SceneA, SceneB, SceneC, SceneD, SceneE, SceneF ]
};

const game = new Phaser.Game(config);
