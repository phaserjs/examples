class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.path = 'assets/animations/aseprite/';

        // this.load.aseprite('paladin', 'paladin.png', 'paladin.json');
        this.load.spritesheet('boom', 'assets/sprites/explosion.png', { frameWidth: 64, frameHeight: 64, endFrame: 23 });
    }

    create ()
    {
        const durationArray = [ 10, 20, 30, 40 ]

        const frames = this.anims.generateFrameNames("boom", { start: 0, end: 23 })

        for (let i = 0; i < frames.length; i++)
        {
            frames[ i ].duration = 10 + (i * 10);
        }

        this.game.anims.create({ key: "test", frames: frames })
        const sprite = this.add.sprite(400, 300, "boom").play({ key: "test" }) // will run at 24 FPS, ignore durationArray
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);