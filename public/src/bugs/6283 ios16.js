class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        const d = this.add.text(32, 32, 'Click It: 0');
        let c = 0;

        this.input.on('pointerdown', () => {

            c++;

            d.setText('Click It: ' + c);
        })
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
