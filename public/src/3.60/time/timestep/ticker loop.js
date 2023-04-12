class Example extends Phaser.Scene
{
    speed = (600 / 2) / 1000;
    log;
    delta;
    time;
    image;

    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        this.delta = this.add.text(0, 0);

        this.image = this.add.image(0, 200, 'bunny');

        this.time = this.add.text(400, 400);

        this.log = [];
    }

    update (t, dt)
    {
        this.image.x += this.speed * (dt);

        if (this.image.x > 1000)
        {
            this.image.x = 0;
        }

        this.log.push(this.sys.game.loop.delta.toString());

        if (this.log.length > 30)
        {
            this.log.shift();
        }

        this.time.setText(`time: ${this.sys.game.loop.time.toString()}`);

        this.delta.setText(this.log);
    }
}

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#9adaea',
    useTicker: true,
    scene: Example
};

const game = new Phaser.Game(config);
