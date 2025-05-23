class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bomb', 'assets/sprites/bombcolor.png');
    }

    create ()
    {
        const text1 = this.add.text(400, 300, 'Phaser\nText Glow', { fontFamily: 'Arial', fontStyle: 'bold', fontSize: 128, color: '#3807c4', align: 'center' }).setOrigin(0.5, 0.5);

        const fx1 = text1.enableFilters().filters.external.addGlow(0xffffff, 0, 0, 1, false, 10, 24);

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
