var scene1Config = {
    key: 'scene1',
    active: true,
    preload: function ()
    {
        this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    },
    create: function ()
    {
        var _this = this;

        this.input.events.on('POINTER_DOWN_EVENT', function (event) {

            console.log('down');

            _this.add.image(event.x, event.y, 'balls', Phaser.Math.Between(0, 5));

        });
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
