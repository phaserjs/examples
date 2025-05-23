class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bomb', 'assets/sprites/bombcolor.png');
    }

    create ()
    {
        const bomb = this.add.sprite(400, 300, 'bomb');

        let fx;
        bomb.enableFilters();
        fx = bomb.filters.internal.addGlow();

        // Allow the filter to automatically expand its padding.
        fx.setPaddingOverride(null);

        //  For Glow filters, the quality and distance can be set in the Game Configuration

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
            quality: 10
        }
    }
};

const game = new Phaser.Game(config);
