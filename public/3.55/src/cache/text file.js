class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v355');
        this.load.text('data', 'assets/loader-tests/test.txt');
    }

    create ()
    {
        console.log(this.cache.text.get('data'));
    }

    update ()
    {

    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
