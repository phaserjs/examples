class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('pyramid', 'assets/sprites/pyramid.png');
        this.load.image('bg', 'assets/skies/space4.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const sprite = this.add.image(400, 300, 'pyramid');

        const fx = sprite.preFX.addReveal(0.1, 1, 0);

        this.tweens.add({
            targets: fx,
            progress: 1,
            repeatDelay: 1000,
            hold: 1000,
            yoyo: true,
            repeat: -1,
            duration: 2000
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
