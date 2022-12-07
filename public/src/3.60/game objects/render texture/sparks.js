class Example extends Phaser.Scene
{
    player;
    rnd;
    rt;

    preload ()
    {
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        this.rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 });

        this.player = this.add.sprite(256, 256, 'dude').setOrigin(0.5, 0.5);

        this.rnd = Math.random;
    }

    update ()
    {
        this.player.setPosition(this.input.x, this.input.y);

        this.draw();
    }

    draw ()
    {
        this.rt.clear();

        this.rt.alpha = this.rnd();
        this.rt.tint = (0xFFFFFF << this.rnd() * 8092);

        for (let i = 0; i < 5; i++)
        {
            const rot = Math.floor((this.rnd() * Math.PI * 2) + 1);
            const dist = 75 + Math.floor((this.rnd() * 50) + 1);
            const x = this.player.x + dist * Math.cos(rot);
            const y = this.player.y + dist * Math.sin(rot);

            this.rt.draw('dude', x, y);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example,
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);
