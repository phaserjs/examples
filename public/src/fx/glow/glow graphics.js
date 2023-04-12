class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bomb', 'assets/sprites/bombcolor.png');
    }

    create ()
    {
        const graphics = this.add.graphics();

        graphics.fillStyle(0xffff00, 1);
        graphics.fillRect(100, 100, 256, 256);

        graphics.fillStyle(0xff00ff, 1);
        graphics.fillRect(300, 200, 256, 256);

        graphics.fillStyle(0x00ff00, 1);
        graphics.fillTriangle(200, 200, 400, 50, 500, 300);

        const fx1 = graphics.postFX.addGlow(0xffffff, 0, 0, false, 0.1, 24);

        this.tweens.add({
            targets: fx1,
            outerStrength: 4,
            yoyo: true,
            loop: -1,
            ease: 'sine.inout'
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
