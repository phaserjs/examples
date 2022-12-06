class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');
    }

    create ()
    {
        const i = this.add.image(400, 300, 'atlas', 'hello');

        console.log(i.width, i.height);

        console.log(i.frame);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
