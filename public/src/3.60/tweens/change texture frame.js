class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('assets', 'assets/atlas/tweenparts.png', 'assets/atlas/tweenparts.json');
    }

    create ()
    {
        const chest = this.add.image(400, 550, 'assets', 'blue-closed').setOrigin(0.5, 1);

        //  After 2 seconds the frame will change to 'blue-open'

        this.tweens.add({
            targets: chest,
            texture: [ 'assets', 'blue-open' ],
            duration: 2000
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
