var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    state: [ DemoA, DemoB, DemoC, DemoD, Controller ]
};

var game = new Phaser.Game(config);
