class GameScene extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bomb', 'assets/sprites/bombcolor.png');
    }

    create ()
    {
        const bomb1 = this.add.image(200, 200, 'bomb');
        const bomb2 = this.add.image(500, 200, 'bomb');
        const bomb3 = this.add.image(800, 200, 'bomb');

        bomb1.preFX.addGlow(0x0000ff);

        bomb3.postFX.addGlow(0x00ff00);
    }
}

new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        width: '100%',
        height: '100%'
    },
    scene: GameScene,
    parent: 'phaser-example'
});
