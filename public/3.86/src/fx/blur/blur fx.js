class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('background', 'assets/sprites/blur-bg.png');
        this.load.image('phaserlogo', 'assets/sprites/phaser2.png');
    }

    create ()
    {
        this.add.image(400, 300, 'background').setScale(0.7);

        const logo = this.add.image(400, 300, 'phaserlogo');

        const fx = logo.preFX.addBlur();

        this.tweens.add({
            targets: fx,
            strength: 0,
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000022',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
