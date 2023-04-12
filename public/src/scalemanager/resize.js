class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('rain', 'assets/pics/thalion-rain.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo-x2.png');
    }

    create ()
    {
        this.bg = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'rain').setOrigin(0);
        this.logo = this.add.sprite(this.scale.width / 2, this.scale.height / 2, 'logo');

        this.scale.on('resize', this.resize, this);
    }

    resize (gameSize, baseSize, displaySize, resolution)
    {
        const width = gameSize.width;
        const height = gameSize.height;

        this.cameras.resize(width, height);

        this.bg.setSize(width, height);
        this.logo.setPosition(width / 2, height / 2);
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#2dab2d',
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        width: '100%',
        height: '100%'
    },
    scene: Example
};

const game = new Phaser.Game(config);
