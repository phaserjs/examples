class Example extends Phaser.Scene
{
    constructor() { super('example') }

    create ()
    {
        const g1 = this.add.grid(100, 100, 128, 96, 32, 32, 0x057605);

        const g2 = this.add.grid(300, 340, 512, 256, 64, 64, 0x00b9f2, 1, 0xffffff, 1);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: Example
};

const game = new Phaser.Game(config);