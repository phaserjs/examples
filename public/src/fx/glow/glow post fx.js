class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bomb', 'assets/sprites/bombcolor.png');
    }

    create ()
    {
        const bomb1 = this.add.sprite(200, 300, 'bomb');
        const bomb2 = this.add.sprite(600, 300, 'bomb');

        const fx1 = bomb1.enableFilters().filters.external.addGlow(0xffffff, 0, 0, 1, false, 10, 32);

        const fx2 = bomb2.enableFilters().filters.external.addGlow(0xff0000, 8, 8, 1, true, 10, 24);

        this.tweens.add({
            targets: fx1,
            outerStrength: 8,
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
    scene: Example
};

const game = new Phaser.Game(config);
