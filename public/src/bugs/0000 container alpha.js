class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/ra-einstein.png');
    }

    create ()
    {
        this.add.image(200, 200, 'pic');

        const a = this.add.graphics();

        a.fillStyle(0xff0000, 1);
        a.fillRect(0, 0, 100, 100);

        const b = this.add.graphics();

        b.fillStyle(0x00ff00, 1);
        b.fillRect(70, 0, 100, 100);

        const c = this.add.container();

        c.add(this.add.image(0, 0, 'pic'));
        c.add(a);
        c.add(b);

        c.setAlpha(0.5);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
