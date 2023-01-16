class Example extends Phaser.Scene
{
    constructor ()
    {
        super({ key: "boot" });
    }

    preload ()
    {
        this.load.image('rick', 'assets/pics/rick-and-morty-by-sawuinhaff-da64e7y.png');
    }

    create ()
    {
        this.cameras.main.fadeFrom(2000, Phaser.Math.Between(50, 255), Phaser.Math.Between(50, 255), Phaser.Math.Between(50, 255));

        this.add.image(400, 300, 'rick').setScale(0.7);
        this.cameras.main.on(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
            this.scene.restart();
        });

        //  Every time you click, fade the camera
        this.input.once('pointerdown', () => {

            //  Get a random color
            const red = Phaser.Math.Between(50, 255);
            const green = Phaser.Math.Between(50, 255);
            const blue = Phaser.Math.Between(50, 255);

            this.cameras.main.fade(2000, red, green, blue);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);

game.scene.add('Boot', Example, true);
