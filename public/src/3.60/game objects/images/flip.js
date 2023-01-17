class Example extends Phaser.Scene
{
    iter = 0;
    image;

    preload ()
    {
        this.load.image('einstein', 'assets/pics/ra-einstein.png');
    }

    create ()
    {
        this.image = this.add.image(400, 300, 'einstein');

        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => this.image.flipX = !this.image.flipX
        });

        this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: () => this.image.flipY = !this.image.flipY
        });
    }

    update ()
    {
        this.image.scaleX = Math.sin(this.iter);
        this.image.scaleY = Math.cos(this.iter);
        this.image.rotation = this.iter;
        this.image.x = 400 + Math.sin(this.iter * 10) * 200;
        this.iter += 0.001;
    }
}

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
