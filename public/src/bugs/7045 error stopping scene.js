class Example extends Phaser.Scene 
{
    constructor()
    {
        super();
    }

    preload()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create() {
        this.add.text(20, 20, "Will stop scene in ⏱ 1 s …")

        const i1 = this.add.image(160, 160, "block");
        const i2 = this.add.image(160, 260, "block");
        const i3 = this.add.image(160, 360, "block");

        i2.on("destroy", () => {
            i1.destroy();
        });

        this.time.delayedCall(1000, () => { this.scene.stop() })
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