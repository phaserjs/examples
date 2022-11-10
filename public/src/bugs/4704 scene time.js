class Example extends Phaser.Scene
{
    constructor ()
    {
        super('Example');
    }

    create ()
    {
        this.logTime = true;

        console.log('create', this.time.now);

        this.input.once('pointerdown', () => {
            this.scene.restart();
        });
    }

    update ()
    {
        if (this.logTime)
        {
            console.log('update', this.time.now);
            this.logTime = false;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
