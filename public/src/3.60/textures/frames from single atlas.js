class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-1.png', 'assets/atlas/megaset-1.json');
    }

    create ()
    {
        this.add.image(400, 200, 'atlas', 'titan-mech');
        this.add.image(400, 400, 'atlas', 'ship');
        this.add.image(400, 600, 'atlas', 'supercars-parsec');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
