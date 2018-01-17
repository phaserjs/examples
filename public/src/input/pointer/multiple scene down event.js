var scene1Config = {
    key: 'scene1',
    active: true,
    preload: function ()
    {
        this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    },
    create: function ()
    {
        this.input.on('pointerdown', function (pointer) {

            this.add.image(pointer.x, pointer.y, 'balls', Phaser.Math.Between(0, 5));

        }, this);
    }
};

var scene2Config = {
    key: 'scene2',
    active: true
};

var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [
        scene1Config,
        scene2Config
    ]
};

var game = new Phaser.Game(config);
