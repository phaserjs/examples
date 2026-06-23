class Example extends Phaser.Scene
{
    gate;
    stencil;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('spookysky', 'assets/skies/spookysky.jpg');
        this.load.image('nebula', 'assets/skies/nebula.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'spookysky');

        this.gate = this.add.ellipse(0, 0, 400, 400, 0xffffff);
        this.stencil = this.add.stencil(400, 300, this.gate);

        this.add.image(400, 300, 'nebula');
    }

    update (time, delta)
    {
        this.stencil.setPosition(
            400 + 8 * Math.sin(time / 1000),
            300 + 8 * Math.sin(time / 654)
        );
        this.gate.setSize(
            400 + 16 * Math.sin(time / 786),
            400 + 16 * Math.sin(time / 881)
        );
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#7799bb',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
