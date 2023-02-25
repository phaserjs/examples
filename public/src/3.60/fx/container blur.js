class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('game', 'assets/tests/gamemock.jpg');
        // this.load.image('touhou', 'assets/pics/touhou1.png');
    }

    create ()
    {
        const container = this.add.container();
        const mock = this.add.image(400, 300, 'game');

        container.add(mock);

        const fx = container.postFX.addBlur(1, 0, 0, 0, 0xffffff, 6);

        this.tweens.add({
            targets: fx,
            strength: 2,
            duration: 2000
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
