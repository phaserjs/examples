class Example extends Phaser.Scene
{
    constructor () {
        super({
            key: 'Example',
            map: {
                add: 'makeStuff',
                load: 'loader'
            }
        });
    }

    preload ()
    {
        this.loader.image('face', 'assets/pics/bw-face.png');
    }

    create ()
    {
        this.makeStuff.image(400, 300, 'face');
        console.log(this);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
