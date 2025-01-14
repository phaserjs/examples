class Example extends Phaser.Scene
{
    offset;
    graphics;
    bob;

    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');
    }

    create ()
    {
        this.testimage = this.add.image(400, 300, 'atlas', 'hello');
        this.testimage.ignoreDestroy = true; // comment out this line and the code works

        this.time.delayedCall(1000, ()=> this.scene.stop())
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
