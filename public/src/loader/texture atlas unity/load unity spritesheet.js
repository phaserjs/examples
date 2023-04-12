class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.unityAtlas('asteroids', 'assets/atlas/asteroids.png', 'assets/atlas/asteroids.png.meta');
    }

    create ()
    {
        this.add.image(200, 200, 'asteroids', 'asteroids_7');
        this.add.image(400, 200, 'asteroids', 'asteroids_10');
        this.add.image(600, 200, 'asteroids', 'asteroids_13');
        this.add.image(200, 400, 'asteroids', 'asteroids_17');
        this.add.image(400, 400, 'asteroids', 'asteroids_21');
        this.add.image(600, 400, 'asteroids', 'asteroids_30');
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
