class Example extends Phaser.Scene
{
    create ()
    {
        const t = this.add.text(100, 100, 'Phaser');

        console.log(t);
    }
}

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
