class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('char', 'assets/pics/nayuki.png');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'char');

        sprite.setInteractive();

        this.input.on(Phaser.Input.Events.POINTER_DOWN, () => {
            // console.log('SCENE POINTER_DOWN');
        });

        this.input.on(Phaser.Input.Events.POINTER_UP, () => {
            console.log('SCENE POINTER_UP');
        });

        sprite.on(Phaser.Input.Events.POINTER_DOWN, () => {
            // console.log('>>>> SPRITE POINTER_DOWN');
        });

        sprite.on(Phaser.Input.Events.POINTER_UP, () => {
            // console.log('>>>> SPRITE POINTER_UP');
            sprite.input.enabled = false;
            // console.log(sprite.input.enabled);
            this.time.delayedCall(1000, () => {
                sprite.input.enabled = true;
                console.log("------------------------")
            });
        });
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
