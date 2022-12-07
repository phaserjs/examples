class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.glsl('fireball', 'assets/shaders/shader0.frag');
    }

    create ()
    {
        this.add.shader('fireball', 400, 300, 800, 600);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
