class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('food', 'assets/games/snake/food.png');
        this.load.image('body', 'assets/games/snake/body.png');
    }

    create ()
    {
    }

    update (time, delta)
    {
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#bfcc00',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
