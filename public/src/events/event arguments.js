class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('plush', 'assets/pics/profil-sad-plush.png');
    }

    create ()
    {
        this.events.on('addImage', this.handler, this);

        //  The handler function will be sent 2 arguments: x and y

        this.events.emit('addImage', 200, 300);
        this.events.emit('addImage', 400, 300);
        this.events.emit('addImage', 600, 300);
    }

    handler (x, y)
    {
        this.add.image(x, y, 'plush');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
