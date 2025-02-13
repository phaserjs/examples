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
        let text = this.add.text( 512, 325, 'TEST TEXT', { fontFamily: 'Arial', fontSize: 48, color: '#808080' } );
        text.preFX?.addShine();

        this.add.rectangle( 512, 640, 800, 20, 0xffffff, 0.2 );
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    scene: Example
};

const game = new Phaser.Game(config);
