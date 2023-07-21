class Demo extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('block', 'assets/sprites/1bitblock3.png');
    }

    create ()
    {
        const b = this.add.sprite(400, 300, 'block').setScale(4);

        // b.preFX.setPadding(128);

        // b.preFX.addBlur(1, 2, 2, 10, 0xffffff, 2);

        this.cameras.main.postFX.addBlur(0, 2, 2, 10, 0xffffff, 2);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    backgroundColor: '#00007d',
    scene: Demo
};

const game = new Phaser.Game(config);
