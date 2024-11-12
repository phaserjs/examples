class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bomb', 'assets/sprites/bombcolor.png');
    }

    create ()
    {
        const bomb1 = this.add.sprite(200, 300, 'bomb');
        bomb1.setInteractive({ useHandCursor: true });

        bomb1.on('pointerover', () =>
        {
            bomb1.postFX.addGlow(0xffffff, 32);
        });
        bomb1.on('pointerout', () =>
        {
            bomb1.postFX.clear();
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
