class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bomb', 'assets/sprites/bombcolor.png');
    }

    create ()
    {
        const bomb = this.add.sprite(400, 300, 'bomb');

        bomb.preFX.setPadding(32);

        const fx = bomb.preFX.addGlow();

        //  For PreFX Glow the quality and distance are set in the Game Configuration

        this.tweens.add({
            targets: fx,
            outerStrength: 10,
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
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example,
    fx: {
        glow: {
            distance: 32,
            quality: 0.1
        }
    }
};

const game = new Phaser.Game(config);
