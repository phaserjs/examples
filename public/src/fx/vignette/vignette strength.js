class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('pic', 'assets/pics/anime-ai.jpg');
    }

    create ()
    {
        const sprite = this.add.image(400, 300, 'pic');

        const fx = sprite.preFX.addVignette(0.5, 0.5, 0.5, 0);

        const text = this.add.text(10, 10, 'FX.Vignette.strength: 0');

        this.tweens.add({
            targets: fx,
            strength: 0.5,
            duration: 3000,
            yoyo: true,
            loop: -1,
            hold: 1000,
            onUpdate: () => {
                text.setText(`FX.Vignette.strength: ${fx.strength}`);
            }
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
